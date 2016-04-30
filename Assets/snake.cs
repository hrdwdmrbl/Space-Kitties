using UnityEngine;
using System.Collections;

public class snake : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		
	}

	void FixedUpdate() {
		GetComponent<Rigidbody>().velocity = transform.forward;
	}
}
