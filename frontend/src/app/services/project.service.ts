import { Injectable } from "@angular/core";

export type Project =
	{
		id: number,
		date: string,
		name: string,
		description: string,
		active: boolean,
		team: {
			name: string,
			description: string,
			users: [{
				profile: { firstname: string, lastname: string, email: string, phone: string },
				isAdmin: boolean,
				active: boolean,
				status: string
			} | null]
		}
	}

@Injectable({
	providedIn: 'root',
})

export class ProjectService {
	apiUrl: string = "http://localhost:8080/"

	getProjects(companyId: number, teamId: number): Promise<Project[]> {
		return fetch(`${this.apiUrl}company/${companyId}/teams/${teamId}/projects`,
			{
				method: "GET"
			})
			.then((response) => {return response.json()})
			.catch(err => console.log(err))
	}

	// Need to change announcement to an announcement object type and user to a user object once we figure all that out
	createProject(companyId: number, teamId: number, project: Project) {
		return fetch(`${this.apiUrl}company/${companyId}/teams/${teamId}/projects`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(project)
			})
			.then((response) => response.json())
			.catch((err) => console.log(err))
	}

	editProject(companyId: number, teamId: number, projectId: number, data: {name: string, description: string, active: boolean}) {
		return fetch(`${this.apiUrl}company/${companyId}/teams/${teamId}/projects/${projectId}`,
			{
				method: "PATCH",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data)
			})
			.then((response) => response.json())
			.catch((err) => console.log(err))
	}
}


// ProjectDto
// {
// 	id: long,
// 	name: string,
// 	description: string,
// 	active: boolean,
// 	team: {
// 	id: long,
// 	name: string,
// 	description: string,
// 	users: [
// {
// 	id: long,
// 	profile: {
// firstname: string,
// lastname: string,
// email:string,
// phone: string
// },
// 	isAdmin: boolean,
// 	active: boolean,
// 	status: string
// }]
// }
//   }
