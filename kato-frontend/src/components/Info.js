import React, {Component} from "react";
import './Info.css';
import { Bar, Line } from 'react-chartjs-2';

class Info extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
            name: "",
            users:[],
            students: [],
            parents: [],
            studyTime: [],
            atpq: [],
            scores: [],
            parent_id: this.props.location.aboutParent,
            student_id: "",
            skills: 75,
            prog: 12,
            study:6,
            avg: 3

        }

        this.changeWeek1 = this.changeWeek1.bind(this);
        this.changeWeek2 = this.changeWeek2.bind(this);
        this.changeWeek3 = this.changeWeek3.bind(this);
        this.changeWeek4 = this.changeWeek4.bind(this);
        this.changeWeek5 = this.changeWeek5.bind(this);
        this.secondsToHours = this.secondsToHours.bind(this);
        this.overView = this.overView.bind(this);
        this.setId = this.setId.bind(this);
        this.setName = this.setName.bind(this);
        this.setId(this.state.parent_id);
       
    }

    /**
     * Sets parentId based on selection from main page (psuedo login)
     */
    setId(id){
        const uid = "";
               fetch("http://localhost:3000/parent").then(res => res.json()).then(res => res.forEach(element => {if(element.user_id === id.parentId) this.setState({student_id: element.student_id})})).then(console.log("stuid" + this.state.student_id))
               console.log("student state: " + this.state.student_id);
    }

    /**
     * Sets name based off matching parentId
     */
    setName(){
        const val = this.state.student_id;
        fetch("http://localhost:3000/user").then(res => res.json()).then(res => res.forEach(element => {if(element.id === val - 3) this.setState({name: element.first_name})}));
    }

   
    componentDidMount() {
        this.setName();
        this.setState({
            atpq:[0,3]
        })
        if(!this.state.student_id === null){
            fetch("http://localhost:3000/avgtime?uid="+ this.state.student_id +"&date1=2019-09-17T19:15:27.000Z&date2=2019-09-24T19:15:27.000Z").then(res=> res.json()).then(res => this.setState({studyTime: [0, this.secondsToHours(res[0].avg)]}));
            fetch("http://localhost:3000/avgscore?uid="+ this.state.student_id +"&date1=2019-09-17T19:15:27.000Z&date2=2019-09-24T19:15:27.000Z").then(res=> res.json()).then(res => this.setState({scores: [0, res[0].avg/10]}));
        } else {
            this.setState({
                studyTime: [0, 6],
                scores: [0,10]
            })
        }
    }

    /**
     * Converts seconds to hours
     */
    secondsToHours(input){
        return input / 60;
    }


    /**
     * Series of functions that change according to the week clicked on
     */

    changeWeek1() {
        const query = "?uid="+ this.state.student_id + "&date1=2019-08-24T19:15:27.000Z&date2=2019-09-01T19:15:27.000Z";
        this.setState({
            studyTime: [],
            scores: [],
            atpq: [0, 4],
            avg: 3
        })

        
        fetch("http://localhost:3000/avgtime" + query).then(res=> res.json()).then(res => this.setState({studyTime: [0, this.secondsToHours(res[0].avg)]}));
        fetch("http://localhost:3000/avgscore" + query).then(res=> res.json()).then(res => this.setState({scores: [0, res[0].avg/10]}));
        
        fetch("http://localhost:3000/avgscore" + query).then(res=> res.json()).then(res => this.setState({skills: Math.trunc(res[0].avg)}));
        fetch("http://localhost:3000/totalques" + query).then(res=> res.json()).then(res => this.setState({prog: Math.trunc(res[0].sum * 1000)}));
        fetch("http://localhost:3000/avgtime" + query).then(res=> res.json()).then(res => this.setState({study: Math.trunc(this.secondsToHours(res[0].avg))}));

       
    }

    changeWeek2() {
        const query1 = "?uid="+ this.state.student_id +"&date1=2019-08-24T19:15:27.000Z&date2=2019-09-01T19:15:27.000Z";
        const query2= "?uid="+ this.state.student_id +"&date1=2019-09-01T19:15:27.000Z&date2=2019-09-08T19:15:27.000Z";
        this.setState({
            studyTime: [],
            scores: [],
            atpq: [4,2],
            avg: 2
        })
        Promise.all(
            [
                fetch("http://localhost:3000/avgtime" + query1),
                fetch("http://localhost:3000/avgtime" + query2)
            ]
        ).then((response) => ([response[0].json(), response[1].json()])).then((response) => {response[0].then(res=> this.setState({studyTime: this.state.studyTime.concat(this.secondsToHours(res[0].avg))}));response[1].then(res => this.setState({studyTime: this.state.studyTime.concat(this.secondsToHours(res[0].avg))}))})
           
        Promise.all(
            [
                fetch("http://localhost:3000/avgscore" + query1),
                fetch("http://localhost:3000/avgscore" + query2)
            ]
        ).then((response) => ([response[0].json(), response[1].json()])).then((response) => {response[0].then(res=> this.setState({scores: this.state.scores.concat(res[0].avg/10)}));response[1].then(res => this.setState({scores: this.state.scores.concat(res[0].avg/100)}))})

        fetch("http://localhost:3000/avgscore" + query2).then(res=> res.json()).then(res => this.setState({skills: Math.trunc(res[0].avg)}));
        fetch("http://localhost:3000/totalques" + query2).then(res=> res.json()).then(res => this.setState({prog: Math.trunc(res[0].sum * 1000)}));
        fetch("http://localhost:3000/avgtime" + query2).then(res=> res.json()).then(res => this.setState({study: Math.trunc(this.secondsToHours(res[0].avg))}));
        
      
    }

    changeWeek3() {
        const query1 = "?uid="+ this.state.student_id +"&date1=2019-09-01T19:15:27.000Z&date2=2019-09-08T19:15:27.000Z";
        const query2= "?uid="+ this.state.student_id +"&date1=2019-09-08T19:15:27.000Z&date2=2019-09-17T19:15:27.000Z";
        this.setState({
            studyTime: [],
            scores: [],
            atpq: [2,3],
            avg: 4
        })
        Promise.all(
            [
                fetch("http://localhost:3000/avgtime" + query1),
                fetch("http://localhost:3000/avgtime" + query2)
            ]
        ).then((response) => ([response[0].json(), response[1].json()])).then((response) => {response[0].then(res=> this.setState({studyTime: this.state.studyTime.concat(this.secondsToHours(res[0].avg))}));response[1].then(res => this.setState({studyTime: this.state.studyTime.concat(this.secondsToHours(res[0].avg))}))})
           
        Promise.all(
            [
                fetch("http://localhost:3000/avgscore" + query1),
                fetch("http://localhost:3000/avgscore" + query2)
            ]
        ).then((response) => ([response[0].json(), response[1].json()])).then((response) => {response[0].then(res=> this.setState({scores: this.state.scores.concat(res[0].avg/10)}));response[1].then(res => this.setState({scores: this.state.scores.concat(res[0].avg/100)}))})

        fetch("http://localhost:3000/avgscore" + query2).then(res=> res.json()).then(res => this.setState({skills: Math.trunc(res[0].avg)}));
        fetch("http://localhost:3000/totalques" + query2).then(res=> res.json()).then(res => this.setState({prog: Math.trunc(res[0].sum * 1000)}));
        fetch("http://localhost:3000/avgtime" + query2).then(res=> res.json()).then(res => this.setState({study: Math.trunc(this.secondsToHours(res[0].avg))}));
     
    }

    changeWeek4() {

      const query1 = "?uid="+ this.state.student_id +"&date1=2019-09-08T19:15:27.000Z&date2=2019-09-17T19:15:27.000Z";
      const query2= "?uid="+ this.state.student_id +"&date1=2019-09-17T19:15:27.000Z&date2=2019-09-24T19:15:27.000Z";
        this.setState({
            studyTime: [],
            scores: [],
            atpq: [3,3],
            avg: 2
        })
        Promise.all(
            [
                fetch("http://localhost:3000/avgtime" + query1),
                fetch("http://localhost:3000/avgtime" + query2)
            ]
        ).then((response) => ([response[0].json(), response[1].json()])).then((response) => {response[0].then(res=> this.setState({studyTime: this.state.studyTime.concat(this.secondsToHours(res[0].avg))}));response[1].then(res => this.setState({studyTime: this.state.studyTime.concat(this.secondsToHours(res[0].avg))}))})
           
        Promise.all(
            [
                fetch("http://localhost:3000/avgscore" + query1),
                fetch("http://localhost:3000/avgscore" + query2)
            ]
        ).then((response) => ([response[0].json(), response[1].json()])).then((response) => {response[0].then(res=> this.setState({scores: this.state.scores.concat(res[0].avg/10)}));response[1].then(res => this.setState({scores: this.state.scores.concat(res[0].avg/100)}))})

        fetch("http://localhost:3000/avgscore" + query2).then(res=> res.json()).then(res => this.setState({skills: Math.trunc(res[0].avg)}));
        fetch("http://localhost:3000/totalques" + query2).then(res=> res.json()).then(res => this.setState({prog: Math.trunc(res[0].sum * 1000)}));
        fetch("http://localhost:3000/avgtime" + query2).then(res=> res.json()).then(res => this.setState({study: Math.trunc(this.secondsToHours(res[0].avg))}));
    }

    changeWeek5() {
      
       console.log("name", this.state.name)
        const query1 = "?uid="+ this.state.student_id +"&date1=2019-09-17T19:15:27.000Z&date2=2019-09-24T19:15:27.000Z";
        const query2= "?uid="+ this.state.student_id +"&date1=2019-09-24T19:15:27.000Z&date2=2019-10-26T19:15:27.000Z";
        this.setState({
            studyTime: [],
            scores: [],
            atpq: [3,4],
            avg: 3
        })
        Promise.all(
            [
                fetch("http://localhost:3000/avgtime" + query1),
                fetch("http://localhost:3000/avgtime" + query2)
            ]
        ).then((response) => ([response[0].json(), response[1].json()])).then((response) => {response[0].then(res=> this.setState({studyTime: this.state.studyTime.concat(this.secondsToHours(res[0].avg))}));response[1].then(res => this.setState({studyTime: this.state.studyTime.concat(this.secondsToHours(res[0].avg))}))})
           
        Promise.all(
            [
                fetch("http://localhost:3000/avgscore" + query1),
                fetch("http://localhost:3000/avgscore" + query2)
            ]
        ).then((response) => ([response[0].json(), response[1].json()])).then((response) => {response[0].then(res=> this.setState({scores: this.state.scores.concat(res[0].avg/10)}));response[1].then(res => this.setState({scores: this.state.scores.concat(res[0].avg/100)}))})

        fetch("http://localhost:3000/avgscore" + query2).then(res=> res.json()).then(res => this.setState({skills: Math.trunc(res[0].avg)}));
        fetch("http://localhost:3000/totalques" + query2).then(res=> res.json()).then(res => this.setState({prog: Math.trunc(res[0].sum * 1000)}));
        fetch("http://localhost:3000/avgtime" + query2).then(res=> res.json()).then(res => this.setState({study: Math.trunc(this.secondsToHours(res[0].avg))}));
    
    }

    /**
     * Reset to overall view
     */
    overView(){

        const query = "?uid=" + this.state.student_id + "&date1=2019-08-24T19:15:27.000Z&date2=2019-10-26T19:15:27.000Z";
        fetch("http://localhost:3000/avgtime" + query).then(res=> res.json()).then(res => this.setState({studyTime: [0, this.secondsToHours(res[0].avg)]}));
        fetch("http://localhost:3000/avgscore" + query).then(res=> res.json()).then(res => this.setState({scores: [0, res[0].avg/10]}));
        fetch("http://localhost:3000/avgscore" + query).then(res=> res.json()).then(res => this.setState({skills: Math.trunc(res[0].avg)}));
        fetch("http://localhost:3000/totalques" + query).then(res=> res.json()).then(res => this.setState({prog: Math.trunc(res[0].sum * 100)}));
        fetch("http://localhost:3000/avgtime" + query).then(res=> res.json()).then(res => this.setState({study: Math.trunc(this.secondsToHours(res[0].avg))}));
        this.setState({
            atpq: [0,3]
        })
    }

    /**
     * Function that loads all elements to page
     */
    render() {
      
        //this.setName();
        
        /**
         * Declarations of chartjs' chart objects, based off state data
         */
        const progressionLine = {
            labels: ["Last Week", "This Week"],
            datasets: [{
                label: "Progress Trend (% Completion)",
                backgroundColor: '#2A8BE4',
                borderColor: 'rgb(255, 99, 132)',
                data: this.state.scores,
            }],
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }

            }

        }

        const studyTimeBar = {
            labels: ["Last Week", "This Week"],
            datasets: [{
                label: "Total Study Time (Hours)",
                backgroundColor: '#2A8BE4',
                borderColor: 'rgb(255, 99, 132)',
                data: this.state.studyTime,
            }],
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }

            }
        };

        const avgQuestionBar = {
            labels: ["Last Week", "This Week"],
            datasets: [{
                label: "Average Time per Question (Minutes)",
                backgroundColor: '#2A8BE4',
                borderColor: 'rgb(255, 99, 132)',
                data: this.state.atpq
            }],
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }

            }

        }
    
        /**
         * HTML elements that work off state data
         */

        return (
            
            <div className="container-fluid data" >
                <div className="row nv">
                    <nav id="upper_nav">
                        <div className="row">
                        <div className="col-lg-11 col-md-10 col-sm-10 col-10">
                            <div className="row">
                            <div className="d-block d-sm-none">
                                <a data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                                    <span className="glyphicon glyphicon-menu-hamburger sideButton"/>
                                </a>
                            </div>
                            <div>
                                <a className="logo" href="#" onClick ={this.overView}>Kato</a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-1 col-md-2 col-sm-2 col-2 dropdown">
                            <a href="#" data-toggle="dropdown">
                                <span className="glyphicon glyphicon-user glyph-edit" aria-haspopup="true" aria-expanded="false" id="dropdownMenuButton"/>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a href= "\" className="dropdown-item">Parent</a>
                            </div>
                        </div>
                        </div>
                    </nav>
                </div>
                <div className="row bd">
                    <div className="col-lg-3 col-md-3 col-sm-6 navigation collapse multi-collapse" id="multiCollapseExample1">
                        <nav id="sidebar">
                            <div className="sidebar-header">
                                <h2>Reports History</h2>
                            </div>
                            <ul className="list-unstyled components">
                                <li>
                                    <a href="#" onClick ={this.changeWeek1}>This Week</a>
                                </li>
                                <li>
                                    <a href="#" onClick ={this.changeWeek2}>Last Week</a>
                                </li>
                                <li>
                                    <a href="#" onClick ={this.changeWeek3}>Week 3</a>
                                </li>
                                <li>
                                    <a href="#" onClick ={this.changeWeek4}>Week 2</a>
                                </li>
                                <li>
                                    <a href="#" onClick ={this.changeWeek5}>Week 1</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 navigation d-none d-sm-block">
                        <nav id="sidebar">
                            <div className="sidebar-header">
                                <h2>Reports History</h2>
                            </div>
                            <ul className="list-unstyled components">
                                <li>
                                    <a href="#" onClick ={this.changeWeek1}>This Week</a>
                                </li>
                                <li>
                                    <a href="#" onClick ={this.changeWeek2}>Last Week</a>
                                </li>
                                <li>
                                    <a href="#" onClick ={this.changeWeek3}>Week 3</a>
                                </li>
                                <li>
                                    <a href="#" onClick ={this.changeWeek4}>Week 4</a>
                                </li>
                                <li>
                                    <a href="#" onClick ={this.changeWeek5}>Week 5</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-6 col-12 dashboard">
                        <div className="info_head">
                            <h2> {this.state.name}'s Weekly Summary</h2>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 info">
                            <a>Mastered in total</a>
                             <h1> {this.state.skills}% </h1>
                            <a>of the required skills</a>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 info">
                            <a>Progressed by</a>
                            <h1> +{this.state.prog}% </h1>
                            <a>this week</a>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 info">
                            <a>Total study time</a>
                            <h1> {this.state.study} hours </h1>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 info">
                            <a>Avg time per question</a>
                            <h1> {this.state.avg} minutes  </h1>
                        </div>
                        <div className="col-lg-12 col-md-12 col-12 graphs">
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <Bar className = "studyTime" data ={studyTimeBar}/>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <Line className = "progression" data = {progressionLine}/>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <Bar className = "avgQuestion" data = {avgQuestionBar}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

}
export default Info;