<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SelectedPlanResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'selected_plan_id' => $this->id,
            'user_id' => $this->user_id,
            'user_name' => $this->user->name ?? null,
            'plan_id' => $this->plan_id,
            'plan_name' => $this->plan->plan_name ?? null,
            'plan_image' => $this->plan->image_name ?? null,
            // 'post_id' => $this->post->id ?? null,
            // 'post_image' => $this->post->image_name ?? null,
            // 'post_comment' => $this->post->comment ?? null,
            'ryokan_id' => $this->plan->ryokan->id ?? null,
            'ryokan_name' => $this->plan->ryokan->ryokan_name ?? null,
            'ryokan_prefectures' => $this->plan->ryokan->ryokan_prefectures ?? null,
            'omamori_id' => $this->plan->omamori->id ?? null,
            'omamori_name' => $this->plan->omamori->omamori_name ?? null,
        ];
    }
}
