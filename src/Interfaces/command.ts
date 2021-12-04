import Client from '../lib/Whatsapp/Client'
import { ISimplifiedMessage, IParsedArgs } from './index'
import MessageHandler from '../Handlers/MessageHandler'

export interface ICommand {
    id: string
    path?: string
    client?: Client
    handler?: MessageHandler
    categories?: ICategories
    options: ICommandOptions
    exec(msg: ISimplifiedMessage, args?: IParsedArgs): Promise<void> | void
}

export interface ICommandOptions {
    cooldown?: number
    aliases: string[]
    category: string
    description: ICommandDescription
    devOnly?: boolean
    adminOnly?: boolean
    any?: boolean
    core?: boolean
    exp?: boolean
}

export interface ICommandDescription {
    content: string
    usage?: string
}

export interface ICategories {
    name: string
    path?: string
    commands: ICommand[]
}
export interface IHandler {
    message?: MessageHandler
}
