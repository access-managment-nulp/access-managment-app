import { Speciality } from "../models/speciality.model";
import { BaseRestService } from "./base.rest.service";

class SpecialityService extends BaseRestService {
    protected baseApiUrl: string = this.baseApiUrl + '/speciality';

    getAll() {
        return this.get<Array<Speciality>>('/all');
    }

    update(speciality: Speciality) {
        return this.put('/update', speciality);
    }
}

export default new SpecialityService();