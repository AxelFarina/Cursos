import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {

	public title:string;
	public project!: Project;
  	public save_project!: any;
	public status!: string;
	public filesToUpload!: Array<File>;

  constructor(
  		private _projectService: ProjectService,
  		private _uploadService: UploadService,
  		private _route: ActivatedRoute,
      	private _router: Router
  ){

  	this.title = "Editar Proyecto";
  }

 ngOnInit(): void {
  	this._route.params.subscribe(params => {
  		let id = params.id;

  		this.getProject(id);

  		});
  }

  getProject(id:any){
  	this._projectService.getProject(id).subscribe(
  		response => {
  				this.project = response.project;
  			},
  			error => {
  				console.log(<any>error);
  			}
  	)
  }

  onSubmit(form:any){
  	
  	// Guardar los datos basicos
  	this._projectService.updatedProject(this.project).subscribe(
  		response => {
  				if(response.project){
  					
  					// Subir la imagen
  					this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id,[],this.filesToUpload, 'image').then((result:any) => {
  						
              this.save_project = result.project;

  						this.status = 'success';
  						
  					});

  				}else{
  					this.status = 'failed';
  				}
  			},
  			error =>{
  				console.log(<any>error);
  			} 
  	);
  }

  fileChangeEvent(fileInput:any){
  		this.filesToUpload = <Array<File>>fileInput.target.files;
  	}

}
