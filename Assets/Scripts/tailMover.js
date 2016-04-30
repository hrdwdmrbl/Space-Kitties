#pragma strict

function Start () {
transform.Rotate(-90,0,0);
}

var target : Transform;
var speed: float;

function Update () {
	transform.LookAt(target);




	// The step size is equal to speed times frame time.
		var step = speed * Time.deltaTime;
		
		// Move our position a step closer to the target.
		transform.position = Vector3.MoveTowards(transform.position, target.position, step);
}

var move = true;
 
 function FixedUpdate()
 {
	if (move) {
     	GetComponent.<Rigidbody>().velocity = 10 * transform.forward;
 	}
 }