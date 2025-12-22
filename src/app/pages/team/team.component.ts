import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-team',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss']
})
export class TeamComponent {
    team = [
        {
            name: 'Jeanne Huayta',
            role: 'Socia Fundadora | Abogada – MINJUS',
            image: 'assets/jeanne-huayta-equipo.png',
            specialties: [
                'Derecho Inmobiliario',
                'Derecho de Familia',
                'Derecho Penal',
                'Derecho Laboral',
                'Derecho Previsional',
                'Derecho Empresarial',
                'Derecho Municipal'
            ]
        },
        {
            name: 'José Antonio Pereyra',
            role: 'Abogado Asociado',
            image: 'assets/jose-pereyra-equipo.png',
            specialties: [
                'Conflictología',
                'Derecho Constitucional',
                'Derecho Penal',
                'Derecho Administrativo',
                'Derecho Procesal Penal',
                'Derecho Procesal',
                'Derecho Procesal Civil'
            ]
        },
        {
            name: 'Bruno Rivadeneyra',
            role: 'Abogado Asociado',
            image: 'assets/bruno-rivadeneyra.png',
            specialties: ['Derecho Penalista', 'Derecho Empresarial', 'Derecho Laboral', 'Derecho Corporativo']
        }
    ];
}
