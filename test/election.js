var Election = artifacts.require("./Election.sol");

contract("Election",function(accounts){
    it("initializes with one candidate", function(){
        return Election.deployed().then(function(instance){
            return instance.candidateCount();
        }).then(function(count){
            assert.equal(count,1);
        });
    });

    it("initializes the candidates with the correct values", function(){
        return Election.deployed().then(function(instance){
            return instance.listCandidate(1);
        }).then(function(candidate){
            assert.equal(candidate[0],"CuongDn"," name ");
            assert.equal(candidate[1],21, " age ");
            assert.equal(candidate[2],1, " Id ");
            assert.equal(candidate[3],0, " vote count");
        });
    });
});