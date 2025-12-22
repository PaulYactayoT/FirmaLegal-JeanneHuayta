import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    isSubmitting = false;
    showToast = false;
    toastType: 'success' | 'error' = 'success';
    toastMessage = '';

    formData = {
        nombre: '',
        email: '',
        mensaje: ''
    };

    get isFormValid(): boolean {
        return !!this.formData.nombre.trim() &&
            !!this.formData.email.trim() &&
            !!this.formData.mensaje.trim() &&
            this.validateEmail(this.formData.email);
    }

    private validateEmail(email: string): boolean {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    async onSubmit(event: Event) {
        event.preventDefault();
        if (this.isSubmitting || !this.isFormValid) return;

        this.isSubmitting = true;

        try {
            const response = await fetch('https://formspree.io/f/meejlvjr', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.formData)
            });

            if (response.ok) {
                this.showNotification('mensaje enviado exitosamente', 'success');
                this.resetForm();
            } else {
                throw new Error('Error en el servidor');
            }
        } catch (error) {
            this.showNotification('Hubo un error al enviar el mensaje. Inténtelo de nuevo.', 'error');
        } finally {
            this.isSubmitting = false;
        }
    }

    private showNotification(message: string, type: 'success' | 'error') {
        this.toastMessage = message;
        this.toastType = type;
        this.showToast = true;

        setTimeout(() => {
            this.showToast = false;
        }, 5000);
    }

    private resetForm() {
        this.formData = {
            nombre: '',
            email: '',
            mensaje: ''
        };
    }
}
