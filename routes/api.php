<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/


//with tymon/jwt
Route::group(['namespace'=>'Api'],function (){

     Route::group(['prefix'=>'user'],function () {
         Route::post('register', 'UserOperationsController@register');
         Route::post('login', 'UserOperationsController@login');
         Route::post('send-password-reset-link', 'UserOperationsController@sendPasswordResetLink');
     });

        // login
    Route::group(['prefix'=>'user','middleware'=>['jwt.auth']],function () {
        Route::post('logout', 'UserOperationsController@logout');
        Route::get('edit/settings','UserOperationsController@edit');
    //    Route::post('update/settings','UserOperationsController@update');
    });
});
