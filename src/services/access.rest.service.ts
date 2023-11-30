import { Access } from "../models/speciality.model";
import { BaseRestService } from "./base.rest.service";

class AccessService extends BaseRestService {
    protected baseApiUrl: string = this.baseApiUrl + '/accesses';

    getAll() {
        return this.get<Array<Access>>('/all');
    }
}

export default new AccessService();