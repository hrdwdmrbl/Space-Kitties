#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter (other : Collider) {
	if(other.gameObject.tag=='Player'){
		other.gameObject.GetComponent.<Grower>().addSegment();
		Destroy(this.gameObject);
	}
}