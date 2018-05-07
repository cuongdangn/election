pragma solidity ^0.4.11;

contract Election {

    struct Candidate {  // information of Candidate
       
        uint id;
        string name;
        uint voteCount;
        uint age;
    }
    mapping (uint=>Candidate) public listCandidate;
    uint public candidatesCount;

    function Election() public {
        candidatesCount = 0;
        addCandidate("CuongDn",21);
    }  
    function addCandidate(string name,uint age) private {
        candidatesCount ++;
        listCandidate[candidatesCount] = Candidate(candidatesCount,name,0,age);
    }

}

