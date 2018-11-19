let mongoose = require("mongoose");
let foodModel = require("../server/food/food.model");

let chai = require("chai");
let chaihttp = require("chai-http");
let server = require("../index");
let should = chai.should();

chai.use(chaihttp);

describe("Foods", () => {
    /* This function cleans the database before starting the tests*/
    beforeEach((done) => {
        foodModel.remove({}, (err) =>{     
            done();
        });
    });
    /* Get request test*/
    describe("/GET food", () => {
        it("it should GET all Foods", (done) => {
            chai.request(server)
                .get("/food")
                .end((err, res)=>{
                    res.should.have.status(200);
                    res.body.should.be.a("array");
                    res.body.length.should.be.eql(0);
                done();
                });
        });
    });
});
