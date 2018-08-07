import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Person } from '../org.me.survey';
import 'rxjs';
import { User } from '../models/user';
import { Http } from '@angular/http';
import { DataService } from '../data.service';

// Can be injected into a constructor
@Injectable()
export class ClientService {
	currentClient: User = null;

	private NAMESPACE = 'Person';

	constructor(
		private _http: Http,
		private dataService: DataService<Person>
	) {
	};

	public getAll(): Observable<Person[]> {
		return this.dataService.getAll(this.NAMESPACE);
	}

	public getparticipant(id: any): Observable<Person> {
		return this.dataService.getSingle(this.NAMESPACE, id);
	}

	public addParticipant(itemToAdd: any): Observable<Person> {
		return this.dataService.add(this.NAMESPACE, itemToAdd);
	}

	public updateParticipant(id: any, itemToUpdate: any): Observable<Person> {
		return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
	}

	public deleteParticipant(id: any): Observable<Person> {
		return this.dataService.delete(this.NAMESPACE, id);
	}

	authenticate(loginClient: User, callback) {
		console.log("*** SERVICE LOGIN HIT ***");
		return this._http.post("/clients/login", loginClient).subscribe(
			res => {
				const client = res.json();
				console.log("*** SERVICE CLIENT ***", client);
				if (!client.errors) {
					localStorage.setItem("currentClient", JSON.stringify(client));
					console.log("*** SERVICE SET CLIENT ***", client);
				} else {
					console.log("*** SERVICE LOGIN ERROR ***", client.errors);
					this.currentClient = null;
				}
				callback(client);
			},
			err => console.log(err)
		);
	}

	setCurrentClient(client) {
		console.log("*** SERVICE HIT SET CURRENT CLIENT ***", client);
		sessionStorage.setItem("currentClient", JSON.stringify(client));
	}

	logout(callback) {
		console.log("*** SERVICE CLIENT LOGOUT ***");
		return this._http.delete("/clients").subscribe(
			res => {
				this.currentClient = null;
				callback(res.json());
			},
			err => console.error(err)
		);
	}
}
