import { NotificationResponse } from './NotificationResponse';

export class ApiResponse<dataType> {
    notification?: NotificationResponse;
    data?: dataType;
}
