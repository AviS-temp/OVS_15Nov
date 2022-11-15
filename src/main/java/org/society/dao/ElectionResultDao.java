// 8 November - Suyog's Code
package org.society.dao;

import java.util.ArrayList;

import java.util.HashMap;
import java.util.List;

import org.society.entities.CooperativeSociety;
//import org.society.entities.ElectionResult;
import org.society.entities.NominatedCandidates;
import org.society.entities.RegisteredSocietyVoters;
import org.society.entities.VotedList;
import org.society.exceptions.CastedVoteNotFoundException;
import org.society.exceptions.ElectionResultAlreadyExistsException;
import org.society.exceptions.ElectionResultNotFoundException;
import org.society.exceptions.NominatedCandidateNotFoundException;
import org.society.repository.CooperativeSocietyRepository;
//import org.society.repository.ElectionResultRepository;
import org.society.repository.NominatedCandidatesRepository;
import org.society.repository.RegisteredSocietyVotersRepository;
import org.society.repository.VotedListRepository;
import org.society.service.ElectionResultService;
import org.society.service.VotedListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ElectionResultDao  implements ElectionResultService  {
	
	/*@Autowired
	private ElectionResultRepository electionResultRepository;*/
	@Autowired
	private NominatedCandidatesRepository nominatedCandidatesRepository;
	@Autowired
	private VotedListRepository  votedListRepository;
	@Autowired
	private RegisteredSocietyVotersRepository registeredSocietyVotersRepository;
	@Autowired
	private VotedListService votedListService;
	@Autowired
	private CooperativeSocietyRepository cooperativeSocietyRepository;
	//@Override
	/*public int addElectionResult(ElectionResult result) throws ElectionResultAlreadyExistsException {
		// 9Nov
		ElectionResult er = electionResultRepository.findBySocietyName(result.getSocietyName());
		if(er!=null)
		{
			throw new ElectionResultAlreadyExistsException("Election Result already present.");
		}
		else
		{
			electionResultRepository.save(result);
			return 1;
		}
	
	
	}
	
	@Override
	public List<ElectionResult> viewElectionResultList() throws ElectionResultNotFoundException {
		// 9Nov
		List<ElectionResult> list= electionResultRepository.findAll();
		if(list.isEmpty())
		{
			throw new ElectionResultNotFoundException("No election result is present.");
		}
		else
		{
		return list;
		}
	}
	
	@Override
	public ElectionResult viewCandidatewiseResult(int candidateId) throws NominatedCandidateNotFoundException, ElectionResultNotFoundException {
		NominatedCandidates obj=nominatedCandidatesRepository.findById(candidateId).get();
		if(obj==null)
		{
			throw new NominatedCandidateNotFoundException("Candidate not present.");
		}
		else {
			ElectionResult obj1=obj.getElectionResult();
			if(obj1==null)
			{
				throw new ElectionResultNotFoundException("Election result is not present.");
			}
			else {
				ElectionResult obj2=electionResultRepository.findById(obj1.getId()).get();
				return obj2;
			}
			
			
		}
		
	}*/
	//8th Nov//checked 13th nov
	@Override
	public double viewVotingPercentage() {// voted list  socity voters
		
		double t= votedListRepository.findAll().size();
		double s= registeredSocietyVotersRepository.findAll().size();
		return (t/s)*100;
		//return (double)electionResultRepository.getById(id).get().getCandidateVotesPercentage();
		
	}
	
	@Override//checked 13 nov
	public double viewCandidateVotingPercent(int candidateId)  {
		
		List<VotedList> list=votedListRepository.findAll();
		NominatedCandidates Obj=nominatedCandidatesRepository.findById(candidateId).get();
		String name=Obj.getSocietyName();
		CooperativeSociety c=cooperativeSocietyRepository.findBySocietyName(name);
		int societyID=c.getSocietyId();
		double candidateCounter=0;
		double societyCounter=0;
		for(VotedList v:list) {
			if(v.getCandidateId()==candidateId) {	
				candidateCounter++;
			}
			if(v.getSocietyId()==societyID) {
				societyCounter++;
			}
		}
		return ((candidateCounter/societyCounter)*100);
		}
	
	@Override//checked 13 th nov
	public int totalSocietyVotes(String societyName) {
		
		CooperativeSociety c=cooperativeSocietyRepository.findBySocietyName(societyName);
		int societyID=c.getSocietyId();
		List<VotedList> list=votedListRepository.findAll();
		int societyCounter=0;
		for(VotedList v:list) {
			
			if(v.getSocietyId()==societyID) {
				societyCounter++;
			}
		}
		return societyCounter;
		
		
		
		
	}
	@Override//checked 13 th nov
	public HashMap<String, Integer> displayVotingStatistics() {
		// total voters, male , female, total society voters
		HashMap<String, Integer> map = new HashMap<>();
		
		List<RegisteredSocietyVoters> votersList = registeredSocietyVotersRepository.findAll();
		int totalVoters = votersList.size();
		
	//	List<VotedList> list = votedListRepository.findAll();
		
		int Female = 0;
		int Male = 0;
		
		
		
		List<CooperativeSociety> coopList = cooperativeSocietyRepository.findAll();
		
		for(RegisteredSocietyVoters r : votersList)
		{
			if(r.getGender().equalsIgnoreCase("Male"))
			{
				Male++;
			}
			else
			{
				Female++;
			}
			for(CooperativeSociety c:coopList)
			{
				if(r.getSociety().getSocietyId()==c.getSocietyId())
				{
					if(map.containsKey(c.getSocietyName()))
					{
						int i = map.get(c.getSocietyName());
						i = i + 1;
						map.put(c.getSocietyName(), i);
					}
					else
					{
						map.put(c.getSocietyName(), 1);
					}
				}
			}
		}
		map.put("totalVoters", totalVoters);
		map.put("totalMale", Male);
		map.put("totalFemale", Female);
		return map;
	//	HashMap<Integer, String> coopMap = new HashMap<>();
		
		
		
	}
	
	@Override//checked 13 th nov
	public NominatedCandidates viewHighestVotingPercentCandidate() {
	List<NominatedCandidates> list=nominatedCandidatesRepository.findAll();
	List<Integer> idList=new ArrayList<>();
	for(NominatedCandidates n:list) {
		idList.add(n.getCandidateId());
	}
		int finalId=0;
		double max=0;
		
		for(int id:idList) {
			double t=max;
			max=Math.max(max,viewCandidateVotingPercent(id)); 
			if(t!=max) {
				finalId=id;
			}
		}
		return nominatedCandidatesRepository.findById(finalId).get();
		
	}
	
	@Override//checked 13 th nov
	public NominatedCandidates viewLowestVotingPercentCandidate()  {
		List<NominatedCandidates> list=nominatedCandidatesRepository.findAll();
		List<Integer> idList=new ArrayList();
		for(NominatedCandidates n:list) {
			idList.add(n.getCandidateId());
		}
		int finalId=0;
		double min=100;
		
		for(int id:idList) {
			double t=min;
			min=Math.min(min,viewCandidateVotingPercent(id) ); 
			if(t!=min) {
				finalId=id;
			}
		}
		return nominatedCandidatesRepository.findById(finalId).get();
		
	}
	
	
	
	
	
	@Override//checked 13 th nov
	public HashMap<String, Double> displayPollingResult() {
		
		HashMap<String, Double> map = new HashMap<>();
		List<RegisteredSocietyVoters> votersList = registeredSocietyVotersRepository.findAll();
	//	double totalVoters = votersList.size();
		
		List<VotedList> list = votedListRepository.findAll();
		double totalVotes = list.size();
		
		double pollingPercent = viewVotingPercentage();
		double y=Math.round(pollingPercent*100.0)/100.0;
		
		map.put("PollingPercentage", y);
		map.put("totalVotes", totalVotes);
		
		List<CooperativeSociety> coopList = cooperativeSocietyRepository.findAll();
		double totalSocieties = coopList.size();
		
		map.put("totalSocieties", totalSocieties);
		
		List<NominatedCandidates> candList = nominatedCandidatesRepository.findAll();
		
		
		HashMap<String, Integer> m = displayVotingStatistics();
		
		for(VotedList v : list)
		{
			for(CooperativeSociety c : coopList)
			{
				int j = m.get(c.getSocietyName());
				
				if(v.getSocietyId()==c.getSocietyId())
				{
					if(map.containsKey(c.getSocietyName()))
					{
						double i = map.get(c.getSocietyName());
						i= (i*j)/100;
						i = i + 1;
						double x =(i*100)/j;
						x=Math.round(x*100.0)/100.0;
						map.put(c.getSocietyName(), x);
					}
					
					else
					{
						double x =100.0/j;
						x=Math.round(x*100.0)/100.0;
						map.put(c.getSocietyName(), x);
					}
				}
			}
			
			for(NominatedCandidates n : candList)
			{
				int t=totalSocietyVotes(n.getSocietyName());
				if(v.getCandidateId()==n.getCandidateId())
				{
					if(map.containsKey(n.getFirstName()+" "+n.getLastName()))
					{
						double i = map.get(n.getFirstName()+" "+n.getLastName());
						i = (i*t)/100;
						i = i+1;
						double x =(i*100)/t;
						x=Math.round(x*100.0)/100.0;
						map.put(n.getFirstName()+" "+n.getLastName(), x);
					}
					else
					{
						double x = 100/t;
						x=Math.round(x*100.0)/100.0;
						map.put(n.getFirstName()+" "+n.getLastName(), x);
					}
				}
			}
		}
			
		
		
		
		
		
		
		
		return map;
	}
	
	

}
