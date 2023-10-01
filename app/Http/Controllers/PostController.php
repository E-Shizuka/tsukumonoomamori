<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function getPostsBySpId(Request $request)
{
    $sp_id = $request->input('sp_id'); // 'sp_id'をクエリパラメータとして取得

    $posts = Post::where('selected_plan_id', $sp_id)->get();
    // 各投稿のcreated_atをフォーマットする
    $formattedPosts = $posts->map(function ($post) {
        $createdAt = Carbon::parse($post->created_at);
        $formattedDate = $createdAt->format('Y年m月d日');
        $post->formatted_created_at = $formattedDate;
        return $post;
    });

    return response()->json($formattedPosts);
    // return response()->json($posts);
}

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // バリデーションルールを定義することをおすすめします
    $request->validate([
        'image' => 'required|image|mimes:jpeg,png,jpg,gif', // 画像のバリデーションルール
        'comment' => 'required|string', // コメントのバリデーションルール
    ]);

    if ($request->hasFile('image')) {
    $image = $request->file('image');
    $imageName = uniqid() . '.' . $image->getClientOriginalExtension();
    $image->storeAs('public/images/post_images', $imageName);
} else {
    // 画像が選択されていない場合のエラーメッセージ
    return response()->json(['message' => '画像を選択してください。', 'success' => false]);
}

    // データベースに投稿を保存
    $post = new Post();
    $post->image_name = $imageName; // 画像ファイル名
    $post->comment = $request->input('comment'); // コメント
    $post->user_id = Auth::id(); // ログインユーザーのID
    $post->mission_id = $request->input('mission_id'); // ミッションID
    $post->selected_plan_id = $request->input('selected_plan_id'); // 選択されたプランID
    $post->save();

    return response()->json(['message' => 'Post created successfully', 'success' => true]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}
