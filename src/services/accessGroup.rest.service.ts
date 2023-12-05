import { AccessGroup } from "../models/speciality.model";
import { BaseRestService } from "./base.rest.service";

class AccessGroupService extends BaseRestService {

    getAll() {
        return this.get<Array<AccessGroup>>('/accessGroups/all');
    }

    create(accessGroup: AccessGroup) {
        return this.post('/accessGroups/create', accessGroup);
    }
    
    update(accessGroup: AccessGroup) {
        return this.put('/accessGroups/update', accessGroup);
    }

    deleteItem(id: number) {
        return this.delete(`/accessGroups/${id}`);
    }
}

export default new AccessGroupService();