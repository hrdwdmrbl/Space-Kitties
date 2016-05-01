#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter (other : Collider) {
	if(other.gameObject.tag=='Player'){
		other.gameObject.GetComponent.<Grower>().substractSegment();

		GetComponent.<AudioSource>().Play();
		yield WaitForSeconds (1);
		Destroy(this.gameObject);

	}
}