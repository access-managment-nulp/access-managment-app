import { AccessGroup } from "../models/speciality.model";
import { BaseRestService } from "./base.rest.service";

class AccessGroupService extends BaseRestService {
    protected baseApiUrl: string = this.baseApiUrl + '/accessGroups';

    getAll() {
        return this.get<Array<AccessGroup>>('/all');
    }

    create(accessGroup: AccessGroup) {
        return this.post('/create', accessGroup);
    }
    
    update(accessGroup: AccessGroup) {
        return this.put('/update', accessGroup);
    }

    deleteItem(id: number) {
        return this.delete(`/${id}`);
    }
}

export default new AccessGroupService();