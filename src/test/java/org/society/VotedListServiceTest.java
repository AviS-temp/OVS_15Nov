package org.society;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.society.entities.VotedList;
import org.society.exceptions.CastedVoteNotFoundException;
import org.society.exceptions.VotedListAlreadyExistsException;
import org.society.exceptions.VotedListNotFoundException;
import org.society.repository.VotedListRepository;
import org.society.service.VotedListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

@ExtendWith(MockitoExtension.class)
@SpringBootTest
public class VotedListServiceTest {
	
	@MockBean
	private VotedListRepository votedRepo;
	
	@Autowired
	private VotedListService service;
	
	@BeforeEach
	public void initEach()
	{
		VotedList v = new VotedList();
	}
	
	@Test
	public void testById() throws VotedListNotFoundException
	{
		VotedList v = new VotedList();
		v.setId(101);
		v.setVoterId(1001);
		when(votedRepo.findByVoterId(1001)).thenReturn(v).thenReturn(null);
		assertEquals(v,service.searchByVoterId(1001));
	}
	
	@Test
	public void testByCandidateId() throws CastedVoteNotFoundException
	{
		VotedList v = new VotedList();
		v.setCandidateId(1001);
		when(votedRepo.findByCandidateId(1001)).thenReturn(Stream.of(v).collect(Collectors.toList())).thenReturn(null);
		assertEquals(1,service.searchByNominatedCandidateId(1001).size());
	}
	
	@Test
	public void testByCandidateId2() throws CastedVoteNotFoundException
	{
		VotedList v = new VotedList();
		v.setCandidateId(1001);
		when(votedRepo.findByCandidateId(1001)).thenReturn(Stream.of(v).collect(Collectors.toList())).thenReturn(null);
		assertEquals(false,service.searchByNominatedCandidateId(1001).isEmpty());
	}
	
	@Test
	public void testAllVotedList() throws VotedListNotFoundException
	{
		VotedList v1 = new VotedList();
		VotedList v2 = new VotedList();
		VotedList v3 = new VotedList();
		VotedList v4 = new VotedList();
		when(votedRepo.findAll()).thenReturn(Stream.of(v1,v2,v3,v4).collect(Collectors.toList()));
		assertEquals(4,service.viewVotedList().size());
		
	}

	
//	@Test
//	public void testAllVotedList2() throws VotedListNotFoundException
//	{
//		/*
//		 * VotedList v1 = new VotedList(); VotedList v2 = new VotedList(); VotedList v3
//		 * = new VotedList(); VotedList v4 = new VotedList();
//		 */
//		when(votedRepo.findAll()).thenThrow(new Exception("Voted List Not Found"));
//		assertEquals("Voted List Not Found",service.viewVotedList());
//		
//	}
//	@Test
//	public void testVotedListSave() throws VotedListAlreadyExistsException
//	{
//		VotedList v = new VotedList();
//		v.setCandidateId(1);
//		v.setId(101);
//		v.setPollingDateTime("21/02/2012");
//		v.setSocietyId(201);
//		v.setVoterId(1001);
//		 assertEquals(1,service.castVotedList(v)); }
//		
//	}
	
}

