import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
    services = [
        {
            title: 'Derecho Corporativo',
            desc: 'Fusiones, adquisiciones y reestructuraciones empresariales.',
            icon: '🏢',
            image: 'assets/derecho-corporativo.png',
            details: 'Asesoría en constitución de empresas, juntas de accionistas, contratos comerciales complejos y auditorías legales (Due Diligence).'
        },
        {
            title: 'Derecho Inmobiliario',
            desc: 'Asesoría integral en saneamiento físico legal y compraventa de predios.',
            icon: '🏠',
            image: 'assets/derecho-inmobiliario.png',
            details: 'Asesoría en división y partición de bienes, revisión de contratos de compraventa, saneamiento en SUNARP, prescripción adquisitiva y procesos de desalojo.'
        },
        {
            title: 'Litigios Civiles',
            desc: 'Resolución de disputas contractuales y daños civiles.',
            icon: '⚖️',
            image: 'assets/derecho-litigios.png',
            details: 'Representación en procesos judiciales de indemnización, incumplimiento de contrato, desalojos y resolución de conflictos de propiedad.'
        },
        {
            title: 'Gestión de Poderes',
            desc: 'Cartas poder simples, especiales, amplias y generales.',
            icon: '📜',
            image: 'assets/poderes.png',
            details: 'Tramitación de poderes fuera de registro, poderes por escritura pública y gestión ante consulados para peruanos en el exterior.'
        },
        {
            title: 'Trámites Administrativos',
            desc: 'Trámites ante el Ministerio de Relaciones Exteriores y Migraciones.',
            icon: '🏛️',
            image: 'assets/tramites-rree.png',
            details: 'Gestión de apostillados, legalizaciones internacionales, visas, carnés de extranjería y procesos de nacionalización.'
        },
        {
            title: 'Derecho de Familia',
            desc: 'Divorcios, custodias y planificación familiar.',
            icon: '👨‍👩‍👧',
            image: 'assets/derecho-familia.png',
            details: 'Especialistas en procesos de alimentos, régimen de visitas, tenencia, divorcios rápidos y autorizaciones de viaje internacional para menores.'
        },
        {
            title: 'Derecho Laboral',
            desc: 'Defensa de derechos laborales y negociaciones.',
            icon: '👥',
            image: 'assets/derecho-laboral.png',
            details: 'Asesoría en despidos arbitrarios, beneficios sociales, elaboración de contratos laborales y representación ante la SUNAFIL.'
        },
        {
            title: 'Derecho Tributario',
            desc: 'Planificación fiscal y defensa ante autoridades.',
            icon: '📊',
            image: 'assets/derecho-tributario.png',
            details: 'Optimización de carga impositiva, defensas ante multas de la SUNAT y asesoría en reclamaciones y apelaciones tributarias.'
        },
        {
            title: 'Propiedad Intelectual',
            desc: 'Protección de marcas, patentes y derechos de autor.',
            icon: '💡',
            image: 'assets/propiedad-intelectual.png',
            details: 'Registro de marcas de productos y servicios ante INDECOPI, protección de nombres comerciales y procesos de oposición a terceros.'
        }
    ];
}
