export interface ApplicationCommand {
  name: string; //3-32 character command name
  description: string; //1-100 character description
  options?: ApplicationCommandOption; //the parameters for the command
}
export type ApplicationCommandOption =
  | ApplicationCommandOption_SUB_COMMAND
  | ApplicationCommandOption_SUB_COMMAND_GROUP
  | ApplicationCommandOptionArgument;

export type ApplicationCommandOptionTypeMap = {
  SUB_COMMAND: 1;
  SUB_COMMAND_GROUP: 2;
  STRING: 3;
  INTEGER: 4;
  BOOLEAN: 5;
  USER: 6;
  CHANNEL: 7;
  ROLE: 8;
};
export type ApplicationCommandOptionType = ApplicationCommandOptionTypeMap[keyof ApplicationCommandOptionTypeMap];
type ApplicationCommandOption_SUB_COMMAND_GROUP_Options = ApplicationCommandOption_SUB_COMMAND;
type ApplicationCommandOption_SUB_COMMAND_Options = ApplicationCommandOptionArgument;
type ApplicationCommandOptionArgument = ApplicationCommandOptionArgumentMap[keyof ApplicationCommandOptionArgumentMap];

interface ApplicationCommandOptionBase {
  type: ApplicationCommandOptionType;
  name: string; // 1-32 character name
  description: string; // 1-100 character description
  default?: boolean; //the first required option for the user to complete--only one option can be default
}

export interface ApplicationCommandOption_SUB_COMMAND
  extends ApplicationCommandOptionBase {
  type: ApplicationCommandOptionTypeMap["SUB_COMMAND"];
  options?: ApplicationCommandOption_SUB_COMMAND_Options;
}
export interface ApplicationCommandOption_SUB_COMMAND_GROUP
  extends ApplicationCommandOptionBase {
  type: ApplicationCommandOptionTypeMap["SUB_COMMAND_GROUP"];
  options?: ApplicationCommandOption_SUB_COMMAND_GROUP_Options;
}
export interface ApplicationCommandOptionArgumentBase
  extends ApplicationCommandOptionBase {
  required?: boolean; //if the parameter is required or optional--default false
}
export interface ApplicationCommandOptionChoice<T extends number | string> {
  name: string; //1-100 character choice name
  value: T; //value of the choice
}
export type ApplicationCommandOptionMap = {
  SUB_COMMAND: ApplicationCommandOption_SUB_COMMAND;
  SUB_COMMAND_GROUP: ApplicationCommandOption_SUB_COMMAND_GROUP;
} & ApplicationCommandOptionArgumentMap;
export type ApplicationCommandOptionArgumentMap = {
  STRING: ApplicationCommandOption_STRING;
  INTEGER: ApplicationCommandOption_INTEGER;
  BOOLEAN: ApplicationCommandOption_BOOLEAN;
  USER: ApplicationCommandOption_USER;
  CHANNEL: ApplicationCommandOption_CHANNEL;
  ROLE: ApplicationCommandOption_ROLE;
};
interface ApplicationCommandOptionArgumentChoiceableBase<
  T extends number | string
> {
  choices?: ApplicationCommandOptionChoice<T>[];
}
export interface ApplicationCommandOption_STRING
  extends ApplicationCommandOptionArgumentChoiceableBase<string> {
  type: ApplicationCommandOptionTypeMap["STRING"];
}
export interface ApplicationCommandOption_INTEGER
  extends ApplicationCommandOptionArgumentChoiceableBase<number> {
  type: ApplicationCommandOptionTypeMap["INTEGER"];
}
export interface ApplicationCommandOption_BOOLEAN
  extends ApplicationCommandOptionArgumentBase {
  type: ApplicationCommandOptionTypeMap["BOOLEAN"];
}
export interface ApplicationCommandOption_CHANNEL
  extends ApplicationCommandOptionArgumentBase {
  type: ApplicationCommandOptionTypeMap["CHANNEL"];
}
export interface ApplicationCommandOption_ROLE
  extends ApplicationCommandOptionArgumentBase {
  type: ApplicationCommandOptionTypeMap["ROLE"];
}
export interface ApplicationCommandOption_USER
  extends ApplicationCommandOptionArgumentBase {
  type: ApplicationCommandOptionTypeMap["USER"];
}
