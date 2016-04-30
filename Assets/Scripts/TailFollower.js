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
    transform.Rotate(90,0,0);
}