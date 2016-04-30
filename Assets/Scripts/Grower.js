#pragma strict

function Start () {
}

function Update () {

}

var lastTailSegment : GameObject;
var tailPrefab : GameObject;

function addSegment () {

	GetComponent.<AudioSource>().Play();
	
	var myTailEnd = lastTailSegment.transform.Find("tailEnd").gameObject;
	var tailSpawnPosition = myTailEnd.transform.position;
	var newTailSegment = Instantiate(tailPrefab, tailSpawnPosition, lastTailSegment.transform.rotation);
//	newTailSegment.transform.parent = transform;
	newTailSegment.GetComponent.<TailFollower>().followWhat = lastTailSegment;

	lastTailSegment = newTailSegment;
}

	function substractSegment(){
//		var myTail = lastTailSegment.transform.Find("tail").gameObject;
//
//		var numChildren = myTail.transform.childCount;
		var segmentToDelete = lastTailSegment;
		lastTailSegment = segmentToDelete.GetComponent.<TailFollower>().followWhat;
		Destroy(segmentToDelete); 
//		Destroy(myTail.transform.GetChild(numChildren - 1).gameObject); 
		
	}