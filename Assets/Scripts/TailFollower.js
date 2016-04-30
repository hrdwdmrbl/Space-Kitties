#pragma strict

function Start () {

}

var followWhat : GameObject;

function Update () {
	if (followWhat == null) return;
    var v3FromLeader =  transform.position - followWhat.transform.position;
    v3FromLeader = v3FromLeader.normalized * 0.4;  
    transform.position = v3FromLeader + followWhat.transform.position;

    transform.LookAt(followWhat.transform);
    //followWhat.transform.position.z=followWhat.transform.position.z+.2;
    //transform.position = transform.forward * 2;

    transform.Rotate(90,0,0);
   

}