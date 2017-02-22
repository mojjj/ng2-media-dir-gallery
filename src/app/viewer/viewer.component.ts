'use strict';

import {
    Component,
    trigger,
    state,
    style,
    transition,
    animate
} from "@angular/core"
import "rxjs/Rx"
import {ImageService} from "../services/image.service"

@Component({
    selector: 'viewer',
    templateUrl: 'viewer.component.html',
    styleUrls: ['viewer.component.css'],
})
