const scene = {
  root: {
    camera: {
      name: "Camera",
      position: null,
      rotation: {
        x: 20,
        y: 100,
        z: 20
      }
    },
    mesh: {
     Goldfish:  {
        material: "White"
      },
    Jellyfish: {
        material: "White"
      },
      Seaweed: {
        material: "White"
      },
      Rocks: {
        material: "White"
      }
    },
    materials: [
      {
        name: "GoldfishMaterial",
        color: "#ffa500"
      },
      {
        name: "JellyfishMaterial",
        color: "#ffc0cb"
      },
      {
        name: "SeaweedMaterial",
        color: "#008000"
      },
      {
        name: "RocksMaterial",
        color: "#8b4513"
      },
      {
        name: "White",
        color: "#ffffff"
      }
    ]
	}
};
document.querySelector(".initial").innerHTML = JSON.stringify(scene);


function changeMaterials(meshName, index = 0) {
  if (scene.root.materials[index].name==meshName.concat("Material")) 
    {
    
			scene.root.mesh.meshName.material=meshName.concat("Material");
    
    document.querySelector(".final").innerHTML = JSON.stringify(scene);
    return;
  }
  changeMaterials(meshName, ++index);
}


function assignPropertyToCamera(pp1="position",pp2={ x: 0, y:0, z:0 }) {
  
	if(scene.root.camera[pp1]!=undefined && scene.root.camera[pp1]!=null){
		delete scene.root.camera[pp1];
		scene.root.camera[pp1]=pp2;
		
	}else if(scene.root.camera[pp1]!=undefined && scene.root.camera[pp1]==null ){
		
		scene.root.camera[pp1]=pp2;
		
		
		
	}else if(scene.root.camera[pp1]==undefined){
		
		scene.root.camera[pp1]=pp2;
	}
	
	else{
		return;
	}
		
	}
  
 

  document.querySelector(".final").innerHTML = JSON.stringify(scene);
}

 
changeMaterials("Goldfish");
changeMaterials("Jellyfish");
changeMaterials("Seaweed");
changeMaterials("Rocks");
assignPropertyToCamera("rotation", { x: 35, y: 20, z: 100 });
assignPropertyToCamera();
assignPropertyToCamera("fov", 23);
assignPropertyToCamera("scale", 23);


