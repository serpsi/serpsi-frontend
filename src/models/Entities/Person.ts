import { Address } from "./Address";
import { EntityBase } from "../EntityBase";
import { Cpf } from "../vos/Cpf";
import { Phone } from "../vos/Phone";

export interface Person extends EntityBase {
  _name: string;
  _rg: string;
  _profilePicture?: string;
  _birthdate: Date;
  _phone: Phone;
  _cpf: Cpf;
  address?: Address;
}