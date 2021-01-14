import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

import { ContactDTO } from './dto/contact.dto'
import { Contact } from './interface/contact.interface'
import { SearchDTO } from './dto/search.dto'

@Injectable()
export class ContactService {
    constructor(@InjectModel('Contact') private readonly contactModel: Model<Contact>) { }

    async createContact(contactDTO: ContactDTO): Promise<Contact> {
        const contact = new this.contactModel(contactDTO)
        return await contact.save()
    }

    async deleteContact(contactId: string): Promise<Contact> {
        const contact = await this.contactModel.findByIdAndDelete(contactId)
        return contact
    }

    async updateContact(contactId: string, contactDTO: ContactDTO): Promise<Contact> {
        const contact = await this.contactModel.findByIdAndUpdate(contactId, contactDTO, { new: true })
        return contact
    }

    async searchContact(searchParams: SearchDTO[]): Promise<Contact[]> {
        let contacts: Contact[] = await this.contactModel.find()
        let searchContacts: Contact[] = []
        for (let index = 0; index < searchParams.length; index++) {
            const element = searchParams[index].text;
            for (let x = 0; x < contacts.length; x++) {
                searchContacts = this.findContact(contacts[x], element.toLocaleLowerCase())
                    ? [...new Set([...searchContacts, ...await this.getContacts(contacts, contacts[x])])]
                    : searchContacts
            }
        }
        return searchContacts.length > 0 ? searchContacts : contacts
    }

    findContact(contact: Contact, element: string): Boolean {
        const { name, address, phoneNumber, email } = contact

        const isExact = (cadena1: string): Boolean => {
            return cadena1.toLowerCase() === element.toLowerCase()
        }
        return isExact(name) || isExact(address) || phoneNumber === Number(element) || isExact(email)
    }

    async getContacts(contacts: Contact[], contact: Contact): Promise<Contact[]> {
        return await contacts.filter((c: Contact) => c._id === contact._id)
    }
}
