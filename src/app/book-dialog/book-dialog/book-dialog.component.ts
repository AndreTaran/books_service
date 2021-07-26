import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Book} from "../../models/book";

@Component({
  selector: 'book-dialog',
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.scss']
})
export class BookDialogComponent implements OnInit {
  form: FormGroup;
  title: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<BookDialogComponent>,
    @Inject(MAT_DIALOG_DATA) {title, description, pageCount, publishDate}:Book
  ) {
    this.title = title;

    this.form = this.fb.group({
      title: [title, Validators.required],
      description: [description, Validators.required],
      pageCount: [pageCount, Validators.required],
      publishDate: [publishDate, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  save() {
    this.dialogRef.close(this.form.value)
  }

  close() {
    this.dialogRef.close()
  }
}
