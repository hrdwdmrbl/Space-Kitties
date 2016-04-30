#pragma strict

function Start () {
	this.addSegment();
}

function Update () {

}

var lastTailSegment : GameObject;
var tailPrefab : GameObject;

function addSegment () {
	
	var myTailEnd = lastTailSegment.transform.Find("tailEnd").gameObject;
	var tailSpawnPosition = myTailEnd.transform.position;
	var newTailSegment = Instantiate(tailPrefab, tailSpawnPosition, lastTailSegment.transform.rotation);
//	newTailSegment.transform.parent = transform;
	newTailSegment.GetComponent.<TailFollower>().followWhat = lastTailSegment;

	lastTailSegment = newTailSegment;
}