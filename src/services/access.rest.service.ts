import { Access } from "../models/speciality.model";
import { BaseRestService } from "./base.rest.service";

class AccessService extends BaseRestService {

    getAll() {
        return this.get<Array<Access>>('/accesses/all');
    }
}

export default new AccessService();