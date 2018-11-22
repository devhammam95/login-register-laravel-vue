<?php

namespace App\Http\Controllers\Api;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserOperationsController extends Controller
{
    /*@params Request
    * register a new user
    */
    public function register(Request $request){
        $data       = $request->all();
        $rules      = [
                        'fullName' => 'required|min:5|max:50|unique:users,fullName',
                        'userName' => 'required|min:5|max:50|unique:users,userName',
                        'email'    => 'required|min:5|max:50|unique:users,email|email',
                        'password' => 'required|min:8|max:30|confirmed',
                      ];
        $validation = Validator::make($data,$rules);
        if ($validation->fails()){
            return response()->json([
                                     'status' => false,
                                     'msg'    => 'Check your inputs',
                                     'errors' => $validation->errors()
                                    ]);
        }
        // create new user
        $user = new User();
        $user->fullName = $request->fullName;
        $user->userName = $request->userName;
        $user->email    = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();
            return response()->json([
                                     'status' => true,
                                     'msg'    => 'Successfully register with us!'
                                    ]);
   }

    /*@params Request
     * login for user
     */
    public function login(Request $request){
        $data       = $request->all();
        $rules      = [
                        'email'     => 'required|min:5|max:50|exists:users,email',
                        'password'  => 'required|min:8|max:30',
        ];
        $validation = Validator::make($data,$rules);
        if ($validation->fails()){
            return response()->json([
                'status' => false,
                'msg'    => 'Check your inputs',
                'errors' => $validation->errors()
            ]);
        }
        if ($token=JWTAuth::attempt(['email'=>$request->email,'password'=>$request->password])){
            return response()->json(['status' => true,'token'=>$token,'userId'=>JWTAuth::toUser($token)->id]);
        }
        else{
            return response()->json(['status' => false,'msg'  => 'Email or password is not correct,try again!',]);
        }
   }

   public function logout(Request $request){
       JWTAuth::invalidate($request->api_token);
       return response()->json(['status'=>true]);
   }
   //retrieve user data
   public function edit(Request $request){
    $user =JWTAuth::toUser($request->api_token);
    return response()->json(['status'=>true,'user'=>$user]);
   }
    //update user data
    public function update(Request $request){

    }
    /*@params Request
     * reset passsword for user
     */
    public function sendPasswordResetLink(Request $request){

    }
}
