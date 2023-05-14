import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DescriptionService } from '../services/description.service';

@Component({
  selector: 'app-description-modifier',
  templateUrl: './decription-modifier.component.html',
  styleUrls: ['./decription-modifier.component.scss']
})
export class DescriptionModifierComponent {
  frenchForm: FormGroup;
  englishForm: FormGroup;

  constructor(private fb: FormBuilder, private descriptionService: DescriptionService) {
    this.frenchForm = this.fb.group({
      frenchName: ['', Validators.required],
      frenchDescription: ['', Validators.required]
    });

    this.englishForm = this.fb.group({
      englishName: ['', Validators.required],
      englishDescription: ['', Validators.required]
    });
  }

  onSubmitFrench(): void {
    if (this.frenchForm.valid) {
      const name = this.frenchForm.get('frenchName')!.value;
      const descriptionString = this.frenchForm.get('frenchDescription')!.value;
      const description = descriptionString.split(';').filter(Boolean);

      this.descriptionService.modifyFrenchDescription(name, description);

      console.log('French description modified successfully');
    }
  }

  onSubmitEnglish(): void {
    if (this.englishForm.valid) {
      const name = this.englishForm.get('englishName')!.value;
      const descriptionString = this.englishForm.get('englishDescription')!.value;
      const description = descriptionString.split(';').filter(Boolean);

      this.descriptionService.modifyEnglishDescription(name, description);

      console.log('English description modified successfully');
    }
  }
}
