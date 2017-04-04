import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
/**
 * Created by He on 3/3/17.
 * 请求API
 */
export const WAKA_API_PREFIX = 'https://wakatime.com/api/v1/';
@Injectable()
export class ApiService {


    constructor(private http: Http) {

    }

    createAuthorizationHeader() {
        // this.option.headers.append('Authorization', `Basic ` + localStorage.getItem('Authorization'));
    }

    /**
     * List of commits for a WakaTime project showing the time spent coding in each commit.
     * @param project
     * @returns {Observable<Response>}
     */
    getCommits(project: string) {

        return this.http.get(`${WAKA_API_PREFIX}users/current/projects/${project}/commits`).map(res => res.json());

    }

    /**
     * A user's logged time for the given day as an array of duration blocks.
     */
    getDurations() {

    }

    /**
     * A single user.
     */
    getUsers() {

    }

    /**
     * List of plugins which have sent data for this user.
     */
    getUserAgents() {

    }

    /**
     *
     * @returns {Observable<R>}
     */
    getProjects() {
        return this.http.get(`${WAKA_API_PREFIX}users/current/projects`).map(res => res.json());
    }

    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}