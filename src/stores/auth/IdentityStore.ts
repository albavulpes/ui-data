import {Inject, Service} from 'typedi';
import {Action, Mutation, State, VuexStore} from '../../framework/decorators/Store';

import {AuthService} from '../../services/auth/AuthService';
import {ToastService} from '../../services/ui/ToastService';

@Service()
export class IdentityStore extends VuexStore {

    @Inject(type => AuthService)
    private AuthService: AuthService;

    @Inject()
    private ToastService: ToastService;

    @State()
    IsAuthenticated: boolean;

    @State()
    UserName: string;

    @State()
    Email: string;

    @Action()
    async fetchIdentity() {
        try {
            const statusResponse = await this.AuthService.me();

            this.updateIdentity(statusResponse);
        }
        catch (error) {
            if (error.response && error.response.status !== 401) {
                this.ToastService.error(error.message);
            }

            this.IsAuthenticated = false;
        }
    }

    @Mutation()
    private updateIdentity(identity: StatusResponse) {
        this.UserName = identity.UserName;
        this.Email = identity.Email;
        this.IsAuthenticated = true;
    }
}
