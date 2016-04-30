#pragma strict
var audioPlanet: AudioSource = GetComponent.<AudioSource>();
function Start () {

}

function Update () {

}
function OnTriggerEnter (other : Collider) {
	if(other.gameObject.tag=='Player'){
		other.gameObject.GetComponent.<Grower>().substractSegment();

		audioPlanet.Play();
		yield WaitForSeconds (1);
		Destroy(this.gameObject);

	}
}