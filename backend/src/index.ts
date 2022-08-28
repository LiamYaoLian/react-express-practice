import { AppDataSource } from "./data-source";
import {Contact} from "./entity/contact";

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new contact into the database...")
    const contact = new Contact()
    contact.id = 1
    contact.firstName = "Timber"
    contact.lastName = "Saw"
    contact.email = "liamyaolian@gmail.com"
    await AppDataSource.manager.save(contact)
    console.log("Saved a new contact with id: " + contact.id)

    console.log("Loading contacts from the database...")
    const contacts = await AppDataSource.manager.find(Contact)
    console.log("Loaded contacts: ", contacts)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
