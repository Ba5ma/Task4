import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal  from 'sweetalert2';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent {
  selectedUserName: string | undefined;
  constructor(private router: Router,
    private route: ActivatedRoute){
      this.route.queryParams.subscribe(params => {
        this.selectedUserName = params['user'];
      });
    }
  currentQuestionIndex: number = 0;
  userAnswers: any[] = [];
Questions : any [] = [
  {
    "id":1,
    "question": "1. Which of these elements in HTML can be used for making text bold?",
    "options": [
      " <a>",
      " <pre>",
      " <br>",
      " <b>"
    ],
    "answer": "d"
  },
  {
    "id":2,
    "question": "2. Which tag do we use in HTML for inserting a line-break?",
    "options": [
      " <br>",
      " <b>",
      " <a>",
      " <pre>"
    ],
    "answer": "b"
  },
  {
    "id":3,
    "question": "3. How to create a hyperlink in HTML?",
    "options": [
      " <a link = 'www.thinkandlearn.com'> thinkandlearn.com</a>",
      " <a>www.thinkandlearn.com<thinkandlearn.com/a>",
      " <a href = 'www.thinkandlearn.com'> thinkandlearn.com</a>",
      " <a url = 'www.thinkandlearn.com'> thinkandlearn.com</a>"
    ],
    "answer": "c"
  },
  {
    "id":4,
    "question": "4. In HTML, how do we insert an image?",
    "options": [
      " <img src='abc.jpg'>",
      " <img href='abc.jpg'>",
      " <img link='abc.jpg'>",
      " <img url='abc.jpg'>"
    ],
    "answer": "a"
  },
  {
    "id":5,
    "question": "5. Which tag do we use to define the options present in the drop-down selection lists?",
    "options": [
      " <list>",
      " <option>",
      " <select>",
      " <dropdown>"
    ],
    "answer": "b"
  }
]

selectOption(option: string) {
  this.userAnswers[this.currentQuestionIndex] = option;
}

nextQuestion() {
  if (this.currentQuestionIndex < this.Questions.length - 1) {
    this.currentQuestionIndex++;
  }
}

isAllQuestionsAnswered(): boolean {
  return this.userAnswers.length === this.Questions.length;
}

goToResults() {
  Swal.fire('Your Answer Submitted Successfully');
}

ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    this.selectedUserName = params['user'];
  });
}
}
