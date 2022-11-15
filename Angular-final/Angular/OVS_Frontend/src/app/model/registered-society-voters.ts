import { CooperativeSociety } from "./cooperative-society";
import { NominatedCandidates } from "./nominated-candidates";

export class RegisteredSocietyVoters {

     public id:number;
	 public voterIdCardNo:string;
	 public firstName:string;
	 public lastName:string;
	 public password:string;
	 public gender:string;
	/* Changes on 5th November */
	// private String reservationCategory;
	public mobileno:string;
	public emailId:string;
	public address1:string;
	/* Changes on 5th November */
	// private String address2;
	// private String mandal;   
	public district:string;
	public pincode:number;
	//public nominatedCandidates:NominatedCandidates = new NominatedCandidates();

	public society:CooperativeSociety = new CooperativeSociety();
	

}
