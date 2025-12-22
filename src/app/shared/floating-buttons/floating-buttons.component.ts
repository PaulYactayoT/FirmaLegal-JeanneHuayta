import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-floating-buttons',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './floating-buttons.component.html',
    styleUrls: ['./floating-buttons.component.scss']
})
export class FloatingButtonsComponent {
    whatsappNumber = '51903150557';
    whatsappMessage = 'Hola, deseo realizar una consulta legal.';

    openWhatsApp() {
        const url = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappMessage)}`;
        window.open(url, '_blank');
    }

    changeLanguage(lang: string) {
        console.log(`Changing language to: ${lang}`);
        // Future implementation for i18n
    }
}
