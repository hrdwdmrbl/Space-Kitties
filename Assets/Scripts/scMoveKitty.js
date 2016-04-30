#pragma strict

function Start () {

}

var move = true;
 
 function FixedUpdate()
 {
	if (move) {
     	GetComponent.<Rigidbody>().velocity = 10 * transform.forward;
 	}
 }