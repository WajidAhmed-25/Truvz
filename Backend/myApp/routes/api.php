
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\TravelController;

Route::post('/applications', [ApplicationController::class, 'store']);
Route::get('/applications', [ApplicationController::class, 'index']);


// for complete db
Route::post('/send-user-details', [TravelController::class, 'sendUserDetails']);


Route::post('/personal-information', [TravelController::class, 'store']);
Route::get('/personal-information', [TravelController::class, 'getPersonalInfo']);
Route::get('personal-information/{id}', [TravelController::class, 'show']);





