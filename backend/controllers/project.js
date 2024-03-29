'use strict'

var Project = require('../models/project');
var fs = require('fs');
var path = require('path');

var controller = {

	home: function(req, res){
		return res.status(200).send({
			message: "Soy la home"
		});
	},

	test: function(req, res){
		return res.status(200).send({
			message: "Soy el metodo o accion test del controlador de project"
		});
	},
		saveProject: function(req, res){
		var project = new Project();

		var params = req.body;
		project.name = params.name;
		project.description = params.description;
		project.category = params.category;
		project.year = params.year;
		project.langs = params.langs;
		project.img = null;

		project.save((err, projectStored) =>{
			if(err) return res.status(500).send({message: "Error al guardar el documento."});

			if(!projectStored) return res.status(404).send({message: "No se ha podido guardar el projecto."});

			return res.status(200).send({project: projectStored});
		});

	},

	getProject: function(req, res){
		var projectId = req.params.id;

		if(projectId == null) return res.status(404).send({message:'El projecto no existe.'});
		

		Project.findById(projectId, (err, project) => {

		if(err) return res.status(500).send({message:'Error al devolver los datos.'});

		if(!project) return res.status(404).send({message:'El projecto no existe.'});

		return res.status(200).send({
			project
		});

		});
	},

	getProjects: function(req, res){

		Project.find({}).exec((err, projects) => {
			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!projects) return res.status(404).send({message: 'No hay projectos para mostrar.'});

			return res.status(200).send({projects});
		});
	},

	updateProject: function(req, res){
		var projectId = req.params.id;
		var update = req.body;

		Project.findByIdAndUpdate(projectId, update, {new:true}, (err, projectUpdate) => {
			if(err) return res.status(500).send({message: 'Error al actualizar.'});

			if(!projectUpdate) return res.status(404).send({message: 'No existe el projecto para actualizar.'});

			return res.status(200).send({
				project: projectUpdate
			});
		});
	},

	deleteProject: function(req, res){
		var projectId = req.params.id;

		Project.findByIdAndRemove(projectId, (err, projectRemoved) => {
			if(err) return res.status(500).send({message: 'No se ha podido borrar el projecto.'});

			if(!projectRemoved) return res.status(404).send({message: 'No se puede elmininar ese projecto.'});

			return res.status(200).send({
				project: projectRemoved
			});
		});
	},

	uploadImage: function(req, res){
		var projectId = req.params.id;
		var fileName = 'Imagen no subida...';

		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];

			Project.findByIdAndUpdate(projectId, {image: fileName}, {new:true}, (err, projectUpdate) => {

				if(err) return res.status(200).send({message: 'La imagen no se ha subido'});

				if(!projectUpdate) res.status(404).send({message: 'El proyecto no existe y no se ha asignado a la imagen'});

				return res.status(200).send({
				project: projectUpdate
			});

		});

			
		}else{

			return res.status(200).send({
				message: fileName
			});
		}
	},

	getImageFile: function(req, res){
		var file = req.params.image;
		var path_file = './uploads/'+file;

		fs.exists (path_file, (exists) => {
			if(exists){
				return res.sendFile(path.resolve(path_file));
			}else{
				return res.status(200).send({
					message: "No existe la imagen..."
				});
			}
		});
	}
	
};

module.exports = controller;

