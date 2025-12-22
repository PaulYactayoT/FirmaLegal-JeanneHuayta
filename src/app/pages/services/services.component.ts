import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
    services = [
        { title: 'Derecho Corporativo', desc: 'Fusiones, adquisiciones y reestructuraciones empresariales.', icon: '🏢', image: 'assets/derecho-corporativo.png' },
        { title: 'Litigios Civiles', desc: 'Resolución de disputas contractuales y daños civiles.', icon: '⚖️', image: 'assets/derecho-litigios.png' },
        { title: 'Derecho Laboral', desc: 'Defensa de derechos laborales y negociaciones colectivas.', icon: '👥', image: 'assets/derecho-laboral.png' },
        { title: 'Propiedad Intelectual', desc: 'Protección de marcas, parentes y derechos de autor.', icon: '💡', image: 'assets/propiedad-intelectual.png' },
        { title: 'Derecho Tributario', desc: 'Planificación fiscal y defensa ante autoridades tributarias.', icon: '📊', image: 'assets/derecho-tributario.png' },
        { title: 'Derecho de Familia', desc: 'Divorcios, custodias y planificación patrimonial familiar.', icon: '👨‍👩‍👧', image: 'assets/derecho-familia.png' }
    ];
}
