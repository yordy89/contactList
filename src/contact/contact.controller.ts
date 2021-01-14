import { Controller, Get, Post, Delete, Put, Param, Res, Body, NotFoundException, HttpStatus } from '@nestjs/common';
import { ContactService } from './contact.service'
import { ContactDTO } from './dto/contact.dto'
import { SearchDTO } from './dto/search.dto'

@Controller('contact')
export class ContactController {
    constructor(private contactService: ContactService) { }

    @Post()
    async createContact(@Res() res, @Body() contactDTO: ContactDTO) {
        const contact = await this.contactService.createContact(contactDTO)
        if (!contact) throw new NotFoundException('No se pudo agregar el contacto')
        return res.status(HttpStatus.OK).json(contact)
    }

    @Delete('/:contactId')
    async deleteContact(@Res() res, @Param('contactId') contactId) {
        const contact = await this.contactService.deleteContact(contactId)
        if (!contact) throw new NotFoundException('No se pudo eliminar el contacto')
        return res.status(HttpStatus.OK).json(contact)
    }

    @Put('/:contactId')
    async updateContact(@Res() res, @Body() contactDTO: ContactDTO, @Param('contactId') contactId) {
        const contact = await this.contactService.updateContact(contactId, contactDTO)
        if (!contact) throw new NotFoundException('No se pudo actualizar el contacto')
        return res.status(HttpStatus.OK).json(contact)
    }

    @Post('/search')
    async searchContact(@Res() res, @Body() searchParams: SearchDTO[]){
        const contacts = await this.contactService.searchContact(searchParams)
        if (!contacts) throw new NotFoundException('No se encontraron coincidencias')
        return res.status(HttpStatus.OK).json(contacts)
    }
}
