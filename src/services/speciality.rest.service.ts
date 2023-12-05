import { Speciality } from "../models/speciality.model";
import { BaseRestService } from "./base.rest.service";

class SpecialityService extends BaseRestService {
    getAll() {
        return this.get<Array<Speciality>>('/speciality/all');
    }

    update(speciality: Speciality) {
        return this.put('/speciality/update', speciality);
    }
}

export default new SpecialityService();