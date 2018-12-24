import { ConfigService } from '../app/ConfigService';
import 'izitoast/dist/css/iziToast.min.css';
import { IziToastSettings } from 'izitoast';
export interface IToastService {
    success: IToastMethod;
    error: IToastMethod;
    warning: IToastMethod;
    info: IToastMethod;
}
export interface IToastMethod {
    (message: string, options?: IziToastSettings): void;
}
export interface IToastOptions extends IziToastSettings {
}
export declare class ToastService implements IToastService {
    private ConfigService;
    constructor(ConfigService: ConfigService);
    success(message: string, options?: IziToastSettings): void;
    error(message: string, options?: IziToastSettings): void;
    info(message: string, options?: IziToastSettings): void;
    warning(message: string, options?: IziToastSettings): void;
}
