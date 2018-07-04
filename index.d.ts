declare namespace Cesium{
	class Animation{
		constructor(container:Element|String,viewModel:AnimationViewModel);
		container:  Element;
		viewModel:  AnimationViewModel;
		applyThemeChanges();
		destroy();
		isDestroyed();
		resize();
	}
	class AnimationViewModel{
		constructor(clockViewModel:ClockViewModel);
		defaultDateFormatter:  AnimationViewModel;//_DateFormatter;
		defaultTicks:  Array<Number>;
		defaultTimeFormatter:  AnimationViewModel;//_TimeFormatter;
		clockViewModel:  ClockViewModel;
		dateFormatter:  AnimationViewModel;//_DateFormatter;
		dateLabel:  String;
		faster:  Command;
		multiplierLabel:  String;
		pauseViewModel:  ToggleButtonViewModel;
		playForwardViewModel:  ToggleButtonViewModel;
		playRealtimeViewModel:  ToggleButtonViewModel;
		playReverseViewModel:  ToggleButtonViewModel;
		shuttleRingAngle:  Number;
		shuttleRingDragging:  Boolean;
		slower:  Command;
		snapToTicks:  Boolean;
		timeFormatter:  AnimationViewModel;//_TimeFormatter;
		timeLabel:  String;
		getShuttleRingTicks();
		setShuttleRingTicks(positiveTicks:Array<Number>);
	}
	class Appearance{
		constructor(options:Object);
		closed:  Boolean;
		fragmentShaderSource:  String;
		material:  Material;
		renderState:  Object;
		translucent:  Boolean;
		vertexShaderSource:  String;
		getFragmentShaderSource();
		getRenderState();
		isTranslucent();
	}
	class ArcGisMapServerImageryProvider{
		constructor(options:Object);
		credit:  Credit;
		enablePickFeatures:  Boolean;
		errorEvent:  Event;
		hasAlphaChannel:  Boolean;
		layers:  String;
		maximumLevel:  Number;
		minimumLevel:  Number;
		proxy:Proxy;
		ready:Boolean;
		readyPromise:  Promise<Boolean>;
		rectangle:  Rectangle;
		tileDiscardPolicy:  TileDiscardPolicy;
		tileHeight:  Number;
		tileWidth:  Number;
		tilingScheme:  TilingScheme;
		token:  String;
		url:  String;
		usingPrecachedTiles:  Boolean;
		getTileCredits(x:Number,y:Number,level:Number);
		pickFeatures(x:Number,y:Number,level:Number,longitude:Number,latitude:Number);
		requestImage(x:Number,y:Number,level:Number,request:Request);
	}
	class Proxy{}
	class AssociativeArray{
		constructor();
		length:  Number;
		values;//:  Array;
		contains(key:String|Number);
		get(key:String|Number);
		remove(key:String|Number);
		removeAll();
		set(key:String|Number,value:Object);
	}
	class AxisAlignedBoundingBox{
		constructor(minimum:Cartesian3,maximum:Cartesian3,center:Cartesian3);
		center:  Cartesian3;
		maximum:  Cartesian3;
		minimum:  Cartesian3;
		clone(box:AxisAlignedBoundingBox,result:AxisAlignedBoundingBox);
		equals(left:AxisAlignedBoundingBox,right:AxisAlignedBoundingBox);
		fromPoints(positions:Array<Cartesian3>,result:AxisAlignedBoundingBox);
		intersectPlane(box:AxisAlignedBoundingBox,plane:Plane);
		clone(result:AxisAlignedBoundingBox);
		equals(right:AxisAlignedBoundingBox);
		intersectPlane(plane:Plane);
	}
	class barycentricCoordinates{
		constructor(point:Cartesian2|Cartesian3,p0:Cartesian2|Cartesian3,p1:Cartesian2|Cartesian3,p2:Cartesian2|Cartesian3,result:Cartesian3);


	}
	class BaseLayerPicker{
		constructor(container:Element|String,options:Object);
		container:  Element;
		viewModel:  BaseLayerPickerViewModel;
		destroy();
		isDestroyed();
	}
	class BaseLayerPickerViewModel{
		constructor(options:Object);
		buttonImageUrl:  String;
		buttonTooltip:  String;
		dropDownVisible:  Boolean;
		globe:  Globe;
		imageryProviderViewModels:  Array<ProviderViewModel>;
		selectedImagery:  ProviderViewModel;
		selectedTerrain:  ProviderViewModel;
		terrainProviderViewModels:  Array<ProviderViewModel>;
		toggleDropDown:  Command;

	}
	class Billboard{
		constructor();
		alignedAxis:  Cartesian3;
		color:  Color;
		disableDepthTestDistance:  Number;
		distanceDisplayCondition:  DistanceDisplayCondition;
		eyeOffset:  Cartesian3;
		height:  Number;
		heightReference:  HeightReference;
		horizontalOrigin:  HorizontalOrigin;
		id:  Object;
		image:  String;
		pixelOffset:  Cartesian2;
		pixelOffsetScaleByDistance:  NearFarScalar;
		position:  Cartesian3;
		ready:  Boolean;
		rotation:  Number;
		scale:  Number;
		scaleByDistance:  NearFarScalar;
		show:  Boolean;
		sizeInMeters:  Boolean;
		translucencyByDistance:  NearFarScalar;
		verticalOrigin:  VerticalOrigin;
		width:  Number;
		computeScreenSpacePosition(scene:Scene,result:Cartesian2);
		equals(other:Billboard);
		setImage(id:String,image:Image|Canvas|String|Resource|Billboard);//_CreateImageCallback);
		setImageSubRegion(id:String,subRegion:BoundingRectangle);
	}
	class Image{}
	class Canvas{}

	class BillboardCollection{
		constructor(options:Object);
		blendOption:  BlendOption;
		debugShowBoundingVolume:  Boolean;
		length:  Number;
		modelMatrix:  Matrix4;
		add(billboard:Object);
		contains(billboard:Billboard);
		destroy();
		get(index:Number);
		isDestroyed();
		remove(billboard:Billboard);
		removeAll();
		update();
	}
	class BillboardGraphics{
		constructor(options:Object);
		alignedAxis:  Property;
		color:  Property;
		definitionChanged:  Event;
		disableDepthTestDistance:  Property;
		distanceDisplayCondition:  Property;
		eyeOffset:  Property;
		height:  Property;
		heightReference:  Property;
		horizontalOrigin:  Property;
		image:  Property;
		imageSubRegion:  Property;
		pixelOffset:  Property;
		pixelOffsetScaleByDistance:  Property;
		rotation:  Property;
		scale:  Property;
		scaleByDistance:  Property;
		show:  Property;
		sizeInMeters:  Property;
		translucencyByDistance:  Property;
		verticalOrigin:  Property;
		width:  Property;
		clone(result:BillboardGraphics);
		merge(source:BillboardGraphics);
	}
	class BillboardVisualizer{
		constructor(entityCluster:EntityCluster,entityCollection:EntityCollection);

		destroy();
		isDestroyed();
		update(time:JulianDate);
	}
	class binarySearch{
		constructor(array/*:Array*/,itemToFind:Object,comparator:binarySearch);//_Comparator);
	}
	class BingMapsApi{
		constructor();
		defaultKey:  String;

	}
	class BingMapsGeocoderService{
		constructor(options:Object);

		geocode(query:String);
	}
	class BingMapsImageryProvider{
		constructor(options:Object);
		credit:  Credit;
		culture:  String;
		defaultGamma:  Number;
		errorEvent:  Event;
		hasAlphaChannel:  Boolean;
		key:  String;
		mapStyle:  BingMapsStyle;
		maximumLevel:  Number;
		minimumLevel:  Number;
		proxy:  Proxy;
		ready:  Boolean;
		readyPromise:  Promise<Boolean>;
		rectangle:  Rectangle;
		tileDiscardPolicy:  TileDiscardPolicy;
		tileHeight:  Number;
		tileWidth:  Number;
		tilingScheme:  TilingScheme;
		url:  String;
		quadKeyToTileXY(quadkey:String);
		tileXYToQuadKey(x:Number,y:Number,level:Number);
		getTileCredits(x:Number,y:Number,level:Number);
		pickFeatures(x:Number,y:Number,level:Number,longitude:Number,latitude:Number);
		requestImage(x:Number,y:Number,level:Number,request:Request);
	}
	class BingMapsStyle{
		constructor();
		AERIAL:  String;
		AERIAL_WITH_LABELS:  String;
		CANVAS_DARK:  String;
		CANVAS_GRAY:  String;
		CANVAS_LIGHT:  String;
		COLLINS_BART:  String;
		ORDNANCE_SURVEY:  String;
		ROAD:  String;

	}
	class BlendEquation{
		constructor();
		ADD:  Number;
		MAX:  Number;
		MIN:  Number;
		REVERSE_SUBTRACT:  Number;
		SUBTRACT:  Number;

	}
	class BlendFunction{
		constructor();
		CONSTANT_ALPHA:  Number;
		CONSTANT_COLOR:  Number;
		DESTINATION_ALPHA:  Number;
		DESTINATION_COLOR:  Number;
		ONE:  Number;
		ONE_MINUS_CONSTANT_ALPHA:  Number;
		ONE_MINUS_CONSTANT_COLOR:  Number;
		ONE_MINUS_DESTINATION_ALPHA:  Number;
		ONE_MINUS_DESTINATION_COLOR:  Number;
		ONE_MINUS_SOURCE_ALPHA:  Number;
		ONE_MINUS_SOURCE_COLOR:  Number;
		SOURCE_ALPHA:  Number;
		SOURCE_ALPHA_SATURATE:  Number;
		SOURCE_COLOR:  Number;
		ZERO:  Number;

	}
	class BlendingState{
		constructor();
		ADDITIVE_BLEND:  Object;
		ALPHA_BLEND:  Object;
		DISABLED:  Object;
		PRE_MULTIPLIED_ALPHA_BLEND:  Object;

	}
	class BlendOption{
		constructor();
		OPAQUE:  Number;
		OPAQUE_AND_TRANSLUCENT:  Number;
		TRANSLUCENT:  Number;

	}
	class BoundingRectangle{
		constructor(x:Number,y:Number,width:Number,height:Number);
		packedLength:  Number;
		height:  Number;
		width:  Number;
		x:  Number;
		y:  Number;
		clone(rectangle:BoundingRectangle,result:BoundingRectangle);
		equals(left:BoundingRectangle,right:BoundingRectangle);
		expand(rectangle:BoundingRectangle,point:Cartesian2,result:BoundingRectangle);
		fromPoints(positions:Array<Cartesian2>,result:BoundingRectangle);
		fromRectangle(rectangle:Rectangle,projection:Object,result:BoundingRectangle);
		intersect(left:BoundingRectangle,right:BoundingRectangle);
		pack(value:BoundingRectangle,array:Array<Number>,startingIndex:Number);
		union(left:BoundingRectangle,right:BoundingRectangle,result:BoundingRectangle);
		unpack(array:Array<Number>,startingIndex:Number,result:BoundingRectangle);
		clone(result:BoundingRectangle);
		equals(right:BoundingRectangle);
		intersect(right:BoundingRectangle);
	}
	class BoundingSphere{
		constructor(center:Cartesian3,radius:Number);
		packedLength:  Number;
		center:  Cartesian3;
		radius:  Number;
		clone(sphere:BoundingSphere,result:BoundingSphere);
		computePlaneDistances(sphere:BoundingSphere,position:Cartesian3,direction:Cartesian3,result:Interval);
		distanceSquaredTo(sphere:BoundingSphere,cartesian:Cartesian3);
		equals(left:BoundingSphere,right:BoundingSphere);
		expand(sphere:BoundingSphere,point:Cartesian3,result:BoundingSphere);
		fromBoundingSpheres(boundingSpheres:Array<BoundingSphere>,result:BoundingSphere);
		fromCornerPoints(corner:Cartesian3,oppositeCorner:Cartesian3,result:BoundingSphere);
		fromEllipsoid(ellipsoid:Ellipsoid,result:BoundingSphere);
		fromEncodedCartesianVertices(positionsHigh:Array<Number>,positionsLow:Array<Number>,result:BoundingSphere);
		fromOrientedBoundingBox(orientedBoundingBox:OrientedBoundingBox,result:BoundingSphere);
		fromPoints(positions:Array<Cartesian3>,result:BoundingSphere);
		fromRectangle2D(rectangle:Rectangle,projection:Object,result:BoundingSphere);
		fromRectangle3D(rectangle:Rectangle,ellipsoid:Ellipsoid,surfaceHeight:Number,result:BoundingSphere);
		fromRectangleWithHeights2D(rectangle:Rectangle,projection:Object,minimumHeight:Number,maximumHeight:Number,result:BoundingSphere);
		fromVertices(positions:Array<Number>,center:Cartesian3,stride:Number,result:BoundingSphere);
		intersectPlane(sphere:BoundingSphere,plane:Plane);
		isOccluded(sphere:BoundingSphere,occluder:Occluder);
		pack(value:BoundingSphere,array:Array<Number>,startingIndex:Number);
		projectTo2D(sphere:BoundingSphere,projection:Object,result:BoundingSphere);
		transform(sphere:BoundingSphere,transform:Matrix4,result:BoundingSphere);
		transformWithoutScale(sphere:BoundingSphere,transform:Matrix4,result:BoundingSphere);
		union(left:BoundingSphere,right:BoundingSphere,result:BoundingSphere);
		unpack(array:Array<Number>,startingIndex:Number,result:BoundingSphere);
		clone(result:BoundingSphere);
		computePlaneDistances(position:Cartesian3,direction:Cartesian3,result:Interval);
		distanceSquaredTo(cartesian:Cartesian3);
		equals(right:BoundingSphere);
		intersectPlane(plane:Plane);
		isOccluded(occluder:Occluder);
		volume();
	}
	class BoxEmitter{
		constructor(dimensions:Cartesian3);
		dimensions:  Cartesian3;

	}
	class BoxGeometry{
		constructor(options:Object);
		packedLength:  Number;
		createGeometry(boxGeometry:BoxGeometry);
		fromAxisAlignedBoundingBox(boundingBox:AxisAlignedBoundingBox);
		fromDimensions(options:Object,dimensions:Cartesian3,vertexFormat:VertexFormat);
		pack(value:BoxGeometry,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:BoxGeometry);
	}
	class BoxGeometryUpdater{
		constructor(entity:Entity,scene:Scene);

		createFillGeometryInstance(time:JulianDate);
		createOutlineGeometryInstance(time:JulianDate);
	}
	class BoxGraphics{
		constructor(options:Object);
		definitionChanged:  Event;
		dimensions:  Property;
		distanceDisplayCondition:  Property;
		fill:  Property;
		material:  MaterialProperty;
		outline:  Property;
		outlineColor:  Property;
		outlineWidth:  Property;
		shadows:  Property;
		show:  Property;
		clone(result:BoxGraphics);
		merge(source:BoxGraphics);
	}
	class BoxOutlineGeometry{
		constructor(options:Object);
		packedLength:  Number;
		createGeometry(boxGeometry:BoxOutlineGeometry);
		fromAxisAlignedBoundingBox(boundingBox:AxisAlignedBoundingBox);
		fromDimensions(options:Object,dimensions:Cartesian3);
		pack(value:BoxOutlineGeometry,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:BoxOutlineGeometry);
	}
	class CallbackProperty{
		constructor(callback:CallbackProperty);//_Callback,isConstant:Boolean);
		definitionChanged:  Event;
		isConstant:  Boolean;
		equals(other:Property);
		getValue(time:JulianDate,result:Object);
		setCallback(callback:CallbackProperty);//_Callback,isConstant:Boolean);
	}
	class Frustum{}
	class Camera{
		constructor(scene:Scene);
		DEFAULT_OFFSET:  HeadingPitchRange;
		DEFAULT_VIEW_FACTOR:  Number;
		DEFAULT_VIEW_RECTANGLE:  Rectangle;
		changed:  Event;
		constrainedAxis:  Cartesian3;
		defaultLookAmount:  Number;
		defaultMoveAmount:  Number;
		defaultRotateAmount:  Number;
		defaultZoomAmount:  Number;
		direction:  Cartesian3;
		directionWC:  Cartesian3;
		frustum:  Frustum;
		heading:  Number;
		inverseTransform:  Matrix4;
		inverseViewMatrix:  Matrix4;
		maximumZoomFactor:  Number;
		moveEnd:  Event;
		moveStart:  Event;
		percentageChanged:  number;
		pitch:  Number;
		position:  Cartesian3;
		positionCartographic:  Cartographic;
		positionWC:  Cartesian3;
		right:  Cartesian3;
		rightWC:  Cartesian3;
		roll:  Number;
		transform:  Matrix4;
		up:  Cartesian3;
		upWC:  Cartesian3;
		viewMatrix:  Matrix4;
		cameraToWorldCoordinates(cartesian:Cartesian4,result:Cartesian4);
		cameraToWorldCoordinatesPoint(cartesian:Cartesian3,result:Cartesian3);
		cameraToWorldCoordinatesVector(cartesian:Cartesian3,result:Cartesian3);
		cancelFlight();
		computeViewRectangle(ellipsoid:Ellipsoid,result:Rectangle);
		distanceToBoundingSphere(boundingSphere:BoundingSphere);
		flyHome(duration:Number);
		flyTo(options:Object,destination:Cartesian3|Rectangle,orientation:Object,duration:Number,complete:Camera_FlightCompleteCallback,cancel:Camera_FlightCancelledCallback,endTransform:Matrix4,maximumHeight:Number,pitchAdjustHeight:Number,flyOverLongitude:Number,flyOverLongitudeWeight:Number,easingFunction:EasingFunctionEasingFunction);//_Callback);
		flyToBoundingSphere(boundingSphere:BoundingSphere,options:Object,duration:Number,offset:HeadingPitchRange,complete:Camera_FlightCompleteCallback,cancel:Camera_FlightCancelledCallback,endTransform:Matrix4,maximumHeight:Number,pitchAdjustHeight:Number,flyOverLongitude:Number,flyOverLongitudeWeight:Number,easingFunction:EasingFunctionEasingFunction);//_Callback);
		getMagnitude();
		getPickRay(windowPosition:Cartesian2,result:Ray);
		getPixelSize(boundingSphere:BoundingSphere,drawingBufferWidth:Number,drawingBufferHeight:Number);
		getRectangleCameraCoordinates(rectangle:Rectangle,result:Cartesian3);
		look(axis:Cartesian3,angle:Number);
		lookAt(target:Cartesian3,offset:Cartesian3|HeadingPitchRange);
		lookAtTransform(transform:Matrix4,offset:Cartesian3|HeadingPitchRange);
		lookDown(amount:Number);
		lookLeft(amount:Number);
		lookRight(amount:Number);
		lookUp(amount:Number);
		move(direction:Cartesian3,amount:Number);
		moveBackward(amount:Number);
		moveDown(amount:Number);
		moveForward(amount:Number);
		moveLeft(amount:Number);
		moveRight(amount:Number);
		moveUp(amount:Number);
		pickEllipsoid(windowPosition:Cartesian2,ellipsoid:Ellipsoid,result:Cartesian3);
		rotate(axis:Cartesian3,angle:Number);
		rotateDown(angle:Number);
		rotateLeft(angle:Number);
		rotateRight(angle:Number);
		rotateUp(angle:Number);
		setView(options:Object,destination:Cartesian3|Rectangle,orientation:Object,endTransform:Matrix4);
		switchToOrthographicFrustum();
		switchToPerspectiveFrustum();
		twistLeft(amount:Number);
		twistRight(amount:Number);
		viewBoundingSphere(boundingSphere:BoundingSphere,offset:HeadingPitchRange);
		worldToCameraCoordinates(cartesian:Cartesian4,result:Cartesian4);
		worldToCameraCoordinatesPoint(cartesian:Cartesian3,result:Cartesian3);
		worldToCameraCoordinatesVector(cartesian:Cartesian3,result:Cartesian3);
		zoomIn(amount:Number);
		zoomOut(amount:Number);
	}
	class Camera_FlightCancelledCallback{}
	class EasingFunctionEasingFunction{}
	class Camera_FlightCompleteCallback{}

	class CameraEventAggregator{
		constructor(canvas:Canvas);
		anyButtonDown:  Boolean;
		currentMousePosition:  Cartesian2;
		destroy();
		getButtonPressTime(type:CameraEventType,modifier:KeyboardEventModifier);
		getButtonReleaseTime(type:CameraEventType,modifier:KeyboardEventModifier);
		getLastMovement(type:CameraEventType,modifier:KeyboardEventModifier);
		getMovement(type:CameraEventType,modifier:KeyboardEventModifier);
		getStartMousePosition(type:CameraEventType,modifier:KeyboardEventModifier);
		isButtonDown(type:CameraEventType,modifier:KeyboardEventModifier);
		isDestroyed();
		isMoving(type:CameraEventType,modifier:KeyboardEventModifier);
		reset();
	}
	class CameraEventType{
		constructor();
		LEFT_DRAG:  Number;
		MIDDLE_DRAG:  Number;
		PINCH:  Number;
		RIGHT_DRAG:  Number;
		WHEEL:  Number;

	}
	class cancelAnimationFrame{
		constructor(requestID:Number);


	}
	class Cartesian2{
		constructor(x:Number,y:Number);
		x:  Number;
		y:  Number;
		packedLength:  Number;
		UNIT_X:  Cartesian2;
		UNIT_Y:  Cartesian2;
		ZERO:  Cartesian2;
		clone(result:Cartesian2);
		equals(right:Cartesian2);
		equalsEpsilon(right:Cartesian2,relativeEpsilon:Number,absoluteEpsilon:Number);
		toString();
		abs(cartesian:Cartesian2,result:Cartesian2);
		add(left:Cartesian2,right:Cartesian2,result:Cartesian2);
		angleBetween(left:Cartesian2,right:Cartesian2);
		clone(cartesian:Cartesian2,result:Cartesian2);
		distance(left:Cartesian2,right:Cartesian2);
		distanceSquared(left:Cartesian2,right:Cartesian2);
		divideByScalar(cartesian:Cartesian2,scalar:Number,result:Cartesian2);
		divideComponents(left:Cartesian2,right:Cartesian2,result:Cartesian2);
		dot(left:Cartesian2,right:Cartesian2);
		equals(left:Cartesian2,right:Cartesian2);
		equalsEpsilon(left:Cartesian2,right:Cartesian2,relativeEpsilon:Number,absoluteEpsilon:Number);
		fromArray(array:Array<Number>,startingIndex:Number,result:Cartesian2);
		fromCartesian3(cartesian:Cartesian3,result:Cartesian2);
		fromCartesian4(cartesian:Cartesian4,result:Cartesian2);
		fromElements(x:Number,y:Number,result:Cartesian2);
		lerp(start:Cartesian2,end:Cartesian2,t:Number,result:Cartesian2);
		magnitude(cartesian:Cartesian2);
		magnitudeSquared(cartesian:Cartesian2);
		maximumByComponent(first:Cartesian2,second:Cartesian2,result:Cartesian2);
		maximumComponent(cartesian:Cartesian2);
		minimumByComponent(first:Cartesian2,second:Cartesian2,result:Cartesian2);
		minimumComponent(cartesian:Cartesian2);
		mostOrthogonalAxis(cartesian:Cartesian2,result:Cartesian2);
		multiplyByScalar(cartesian:Cartesian2,scalar:Number,result:Cartesian2);
		multiplyComponents(left:Cartesian2,right:Cartesian2,result:Cartesian2);
		negate(cartesian:Cartesian2,result:Cartesian2);
		normalize(cartesian:Cartesian2,result:Cartesian2);
		pack(value:Cartesian2,array:Array<Number>,startingIndex:Number);
		packArray(array:Array<Cartesian2>,result:Array<Number>);
		subtract(left:Cartesian2,right:Cartesian2,result:Cartesian2);
		unpack(array:Array<Number>,startingIndex:Number,result:Cartesian2);
		unpackArray(array:Array<Number>,result:Array<Cartesian2>);
	}
	class Cartesian3{
		constructor(x:Number,y:Number,z:Number);
		x:  Number;
		y:  Number;
		z:  Number;
		packedLength:  Number;
		UNIT_X:  Cartesian3;
		UNIT_Y:  Cartesian3;
		UNIT_Z:  Cartesian3;
		ZERO:  Cartesian3;
		clone(result:Cartesian3);
		equals(right:Cartesian3);
		equalsEpsilon(right:Cartesian3,relativeEpsilon:Number,absoluteEpsilon:Number);
		toString();
		abs(cartesian:Cartesian3,result:Cartesian3);
		add(left:Cartesian3,right:Cartesian3,result:Cartesian3);
		angleBetween(left:Cartesian3,right:Cartesian3);
		clone(cartesian:Cartesian3,result:Cartesian3);
		cross(left:Cartesian3,right:Cartesian3,result:Cartesian3);
		distance(left:Cartesian3,right:Cartesian3);
		distanceSquared(left:Cartesian3,right:Cartesian3);
		divideByScalar(cartesian:Cartesian3,scalar:Number,result:Cartesian3);
		divideComponents(left:Cartesian3,right:Cartesian3,result:Cartesian3);
		dot(left:Cartesian3,right:Cartesian3);
		equals(left:Cartesian3,right:Cartesian3);
		equalsEpsilon(left:Cartesian3,right:Cartesian3,relativeEpsilon:Number,absoluteEpsilon:Number);
		fromArray(array:Array<Number>,startingIndex:Number,result:Cartesian3);
		fromCartesian4(cartesian:Cartesian4,result:Cartesian3);
		fromDegrees(longitude:Number,latitude:Number,height:Number,ellipsoid:Ellipsoid,result:Cartesian3);
		fromDegreesArray(coordinates:Array<Number>,ellipsoid:Ellipsoid,result:Array<Cartesian3>);
		fromDegreesArrayHeights(coordinates:Array<Number>,ellipsoid:Ellipsoid,result:Array<Cartesian3>);
		fromElements(x:Number,y:Number,z:Number,result:Cartesian3);
		fromRadians(longitude:Number,latitude:Number,height:Number,ellipsoid:Ellipsoid,result:Cartesian3);
		fromRadiansArray(coordinates:Array<Number>,ellipsoid:Ellipsoid,result:Array<Cartesian3>);
		fromRadiansArrayHeights(coordinates:Array<Number>,ellipsoid:Ellipsoid,result:Array<Cartesian3>);
		fromSpherical(spherical:Spherical,result:Cartesian3);
		lerp(start:Cartesian3,end:Cartesian3,t:Number,result:Cartesian3);
		magnitude(cartesian:Cartesian3);
		magnitudeSquared(cartesian:Cartesian3);
		maximumByComponent(first:Cartesian3,second:Cartesian3,result:Cartesian3);
		maximumComponent(cartesian:Cartesian3);
		minimumByComponent(first:Cartesian3,second:Cartesian3,result:Cartesian3);
		minimumComponent(cartesian:Cartesian3);
		mostOrthogonalAxis(cartesian:Cartesian3,result:Cartesian3);
		multiplyByScalar(cartesian:Cartesian3,scalar:Number,result:Cartesian3);
		multiplyComponents(left:Cartesian3,right:Cartesian3,result:Cartesian3);
		negate(cartesian:Cartesian3,result:Cartesian3);
		normalize(cartesian:Cartesian3,result:Cartesian3);
		pack(value:Cartesian3,array:Array<Number>,startingIndex:Number);
		packArray(array:Array<Cartesian3>,result:Array<Number>);
		projectVector(a:Cartesian3,b:Cartesian3,result:Cartesian3);
		subtract(left:Cartesian3,right:Cartesian3,result:Cartesian3);
		unpack(array:Array<Number>,startingIndex:Number,result:Cartesian3);
		unpackArray(array:Array<Number>,result:Array<Cartesian3>);
	}
	class Cartesian4{
		constructor(x:Number,y:Number,z:Number,w:Number);
		w:  Number;
		x:  Number;
		y:  Number;
		z:  Number;
		packedLength:  Number;
		UNIT_W:  Cartesian4;
		UNIT_X:  Cartesian4;
		UNIT_Y:  Cartesian4;
		UNIT_Z:  Cartesian4;
		ZERO:  Cartesian4;
		clone(result:Cartesian4);
		equals(right:Cartesian4);
		equalsEpsilon(right:Cartesian4,relativeEpsilon:Number,absoluteEpsilon:Number);
		toString();
		abs(cartesian:Cartesian4,result:Cartesian4);
		add(left:Cartesian4,right:Cartesian4,result:Cartesian4);
		clone(cartesian:Cartesian4,result:Cartesian4);
		distance(left:Cartesian4,right:Cartesian4);
		distanceSquared(left:Cartesian4,right:Cartesian4);
		divideByScalar(cartesian:Cartesian4,scalar:Number,result:Cartesian4);
		divideComponents(left:Cartesian4,right:Cartesian4,result:Cartesian4);
		dot(left:Cartesian4,right:Cartesian4);
		equals(left:Cartesian4,right:Cartesian4);
		equalsEpsilon(left:Cartesian4,right:Cartesian4,relativeEpsilon:Number,absoluteEpsilon:Number);
		fromArray(array:Array<Number>,startingIndex:Number,result:Cartesian4);
		fromColor(color:Color,result:Cartesian4);
		fromElements(x:Number,y:Number,z:Number,w:Number,result:Cartesian4);
		lerp(start:Cartesian4,end:Cartesian4,t:Number,result:Cartesian4);
		magnitude(cartesian:Cartesian4);
		magnitudeSquared(cartesian:Cartesian4);
		maximumByComponent(first:Cartesian4,second:Cartesian4,result:Cartesian4);
		maximumComponent(cartesian:Cartesian4);
		minimumByComponent(first:Cartesian4,second:Cartesian4,result:Cartesian4);
		minimumComponent(cartesian:Cartesian4);
		mostOrthogonalAxis(cartesian:Cartesian4,result:Cartesian4);
		multiplyByScalar(cartesian:Cartesian4,scalar:Number,result:Cartesian4);
		multiplyComponents(left:Cartesian4,right:Cartesian4,result:Cartesian4);
		negate(cartesian:Cartesian4,result:Cartesian4);
		normalize(cartesian:Cartesian4,result:Cartesian4);
		pack(value:Cartesian4,array:Array<Number>,startingIndex:Number);
		packArray(array:Array<Cartesian4>,result:Array<Number>);
		subtract(left:Cartesian4,right:Cartesian4,result:Cartesian4);
		unpack(array:Array<Number>,startingIndex:Number,result:Cartesian4);
		unpackArray(array:Array<Number>,result:Array<Cartesian4>);
	}
	class Cartographic{
		constructor(longitude:Number,latitude:Number,height:Number);
		ZERO:  Cartographic;
		height:  Number;
		latitude:  Number;
		longitude:  Number;
		clone(cartographic:Cartographic,result:Cartographic);
		equals(left:Cartographic,right:Cartographic);
		equalsEpsilon(left:Cartographic,right:Cartographic,epsilon:Number);
		fromCartesian(cartesian:Cartesian3,ellipsoid:Ellipsoid,result:Cartographic);
		fromDegrees(longitude:Number,latitude:Number,height:Number,result:Cartographic);
		fromRadians(longitude:Number,latitude:Number,height:Number,result:Cartographic);
		toCartesian(cartographic:Cartographic,ellipsoid:Ellipsoid,result:Cartesian3);
		clone(result:Cartographic);
		equals(right:Cartographic);
		equalsEpsilon(right:Cartographic,epsilon:Number);
		toString();
	}
	class CartographicGeocoderService{
		constructor();

		geocode(query:String);
	}
	class CatmullRomSpline{
		constructor(options:Object);
		firstTangent:  Cartesian3;
		lastTangent:  Cartesian3;
		points:  Array<Cartesian3>;
		times:  Array<Number>;
		clampTime(time:Number);
		evaluate(time:Number,result:Cartesian3);
		findTimeInterval(time:Number);
		wrapTime(time:Number);
	}
	class Cesium3DTile{
		constructor();
		boundingSphere:  BoundingSphere;
		children:  Array<Cesium3DTile>;
		computedTransform:  Matrix4;
		content:  Cesium3DTileContent;
		expireDate:  JulianDate;
		expireDuration:  Number;
		geometricError:  Number;
		parent:  Cesium3DTile;
		tileset:  Cesium3DTileset;
		transform:  Matrix4;

	}
	class Cesium3DTileColorBlendMode{
		constructor();
		HIGHLIGHT:  Number;
		MIX:  Number;
		REPLACE:  Number;

	}
	class Cesium3DTileContent{
		constructor();
		batchTableByteLength:  Number;
		featuresLength:  Number;
		geometryByteLength:  Number;
		innerContents;//:  Array;
		pointsLength:  Number;
		readyPromise:  Promise<Cesium3DTileContent>;
		texturesByteLength:  Number;
		trianglesLength:  Number;
		url:  String;
		getFeature(batchId:Number);
		hasProperty(batchId:Number,name:String);
	}
	class Cesium3DTileFeature{
		constructor();
		color:  Color;
		primitive:  Cesium3DTileset;
		show:  Boolean;
		tileset:  Cesium3DTileset;
		getProperty(name:String);
		getPropertyNames(results:Array<String>);
		hasProperty(name:String);
		setProperty(name:String,value:any);
	}
	class Cesium3DTilePointFeature{
		constructor();
		anchorLineColor:  Color;
		anchorLineEnabled:  Boolean;
		backgroundColor:  Color;
		backgroundEnabled:  Boolean;
		backgroundPadding:  Cartesian2;
		color:  Color;
		disableDepthTestDistance:  Number;
		distanceDisplayCondition:  DistanceDisplayCondition;
		font:  String;
		heightOffset:  Number;
		horizontalOrigin:  HorizontalOrigin;
		image:  String;
		labelColor:  Color;
		labelHorizontalOrigin:  HorizontalOrigin;
		labelOutlineColor:  Color;
		labelOutlineWidth:  Number;
		labelStyle:  LabelStyle;
		labelText:  String;
		labelVerticalOrigin:  VerticalOrigin;
		pointOutlineColor:  Color;
		pointOutlineWidth:  Number;
		pointSize:  Number;
		primitive:  Cesium3DTileset;
		scaleByDistance:  NearFarScalar;
		show:  Boolean;
		tileset:  Cesium3DTileset;
		translucencyByDistance:  NearFarScalar;
		verticalOrigin:  VerticalOrigin;
		getProperty(name:String);
		getPropertyNames(results:Array<String>);
		hasProperty(name:String);
		setProperty(name:String,value:any);
	}
	class ClassificationType{}
	class PointCloudShading{}
	
	class Cesium3DTileset{
		constructor(options:Object);
		allTilesLoaded:  Event;
		asset:  Object;
		basePath:  String;
		baseScreenSpaceError:  Number;
		boundingSphere:  BoundingSphere;
		classificationType:  ClassificationType;
		clippingPlanes:  ClippingPlaneCollection;
		colorBlendAmount:  Number;
		colorBlendMode:  Cesium3DTileColorBlendMode;
		debugColorizeTiles:  Boolean;
		debugFreezeFrame:  Boolean;
		debugShowBoundingVolume:  Boolean;
		debugShowContentBoundingVolume:  Boolean;
		debugShowGeometricError:  Boolean;
		debugShowMemoryUsage:  Boolean;
		debugShowRenderingStatistics:  Boolean;
		debugShowUrl:  Boolean;
		debugShowViewerRequestVolume:  Boolean;
		debugWireframe:  Boolean;
		dynamicScreenSpaceError:  Boolean;
		dynamicScreenSpaceErrorDensity:  Number;
		dynamicScreenSpaceErrorFactor:  Number;
		dynamicScreenSpaceErrorHeightFalloff:  Number;
		ellipsoid:  Ellipsoid;
		immediatelyLoadDesiredLevelOfDetail:  Boolean;
		loadProgress:  Event;
		loadSiblings:  Boolean;
		maximumMemoryUsage:  Number;
		maximumScreenSpaceError:  Number;
		modelMatrix:  Matrix4;
		pointCloudShading:  PointCloudShading;
		properties:  Object;
		ready:  Boolean;
		readyPromise:  Promise<Cesium3DTileset>;
		shadows:  ShadowMode;
		show:  Boolean;
		skipLevelOfDetail:  Boolean;
		skipLevels:  Number;
		skipScreenSpaceErrorFactor:  Number;
		style:  Cesium3DTileStyle;
		tileFailed:  Event;
		tileLoad:  Event;
		tilesLoaded:  Boolean;
		tileUnload:  Event;
		tileVisible:  Event;
		timeSinceLoad:  Number;
		totalMemoryUsageInBytes:  Number;
		url:  String;
		loadJson(tilesetUrl:Resource|String);
		destroy();
		isDestroyed();
		makeStyleDirty();
		trimLoadedTiles();
		update();
	}
	class Cesium3DTilesInspector{
		constructor(container:Element|String,scene:Scene);
		container:  Element;
		viewModel:  Cesium3DTilesInspectorViewModel;
		destroy();
		isDestroyed();
	}
	class Cesium3DTilesInspectorViewModel{
		constructor(scene:Scene,performanceContainer:HTMLElement);
		baseResolution:  Number;
		baseScreenSpaceError:  Number;
		colorBlendMode:  Cesium3DTileColorBlendMode;
		colorBlendModes:  Array<Object>;
		colorize:  Boolean;
		displayVisible:  Boolean;
		dynamicScreenSpaceError:  Boolean;
		dynamicScreenSpaceErrorDensity:  Number;
		dynamicScreenSpaceErrorDensitySliderValue:  Number;
		dynamicScreenSpaceErrorFactor:  Number;
		editorError:  String;
		eyeDomeLighting:  Boolean;
		eyeDomeLightingRadius:  Number;
		eyeDomeLightingStrength:  Number;
		feature:  Cesium3DTileFeature;
		freezeFrame:  Boolean;
		geometricErrorScale:  Number;
		immediatelyLoadDesiredLevelOfDetail:  Boolean;
		inspectorVisible:  Boolean;
		loadSiblings:  Boolean;
		loggingVisible:  Boolean;
		maximumAttenuation:  Number;
		maximumScreenSpaceError:  Number;
		optimizationVisible:  Boolean;
		performance:  Boolean;
		performanceContainer:  HTMLElement;
		pickActive:  Boolean;
		picking:  Boolean;
		pickStatisticsText:  String;
		pointCloudShading:  Boolean;
		properties:  Array<String>;
		scene:  Scene;
		showBoundingVolumes:  Boolean;
		showContentBoundingVolumes:  Boolean;
		showGeometricError:  Boolean;
		showMemoryUsage:  Boolean;
		showOnlyPickedTileDebugLabel:  Boolean;
		showPickStatistics:  Boolean;
		showRenderingStatistics:  Boolean;
		showRequestVolumes:  Boolean;
		showStatistics:  Boolean;
		showUrl:  Boolean;
		skipLevelOfDetail:  Boolean;
		skipLevels:  Number;
		skipScreenSpaceErrorFactor:  Number;
		statisticsText:  String;
		styleString:  String;
		styleVisible:  Boolean;
		tile:  Cesium3DTile;
		tileDebugLabelsVisible:  Boolean;
		tileset:  Cesium3DTileset;
		tilesetVisible:  Boolean;
		updateVisible:  Boolean;
		wireframe:  Boolean;
		getStatistics(tileset:Cesium3DTileset,isPick:Boolean);
		compileStyle();
		destroy();
		isDestroyed();
		styleEditorKeyPress();
		toggleDisplay();
		toggleInspector();
		toggleLogging();
		toggleOptimization();
		togglePickTileset();
		toggleStyle();
		toggleTileDebugLabels();
		toggleTileset();
		toggleUpdate();
		trimTilesCache();
	}
	class Cesium3DTileStyle{
		constructor(style:Resource|String|Object);
		anchorLineColor:  StyleExpression;
		anchorLineEnabled:  StyleExpression;
		backgroundColor:  StyleExpression;
		backgroundEnabled:  StyleExpression;
		backgroundPadding:  StyleExpression;
		color:  StyleExpression;
		disableDepthTestDistance:  StyleExpression;
		distanceDisplayCondition:  StyleExpression;
		font:  StyleExpression;
		heightOffset:  StyleExpression;
		horizontalOrigin:  StyleExpression;
		image:  StyleExpression;
		labelColor:  StyleExpression;
		labelHorizontalOrigin:  StyleExpression;
		labelOutlineColor:  StyleExpression;
		labelOutlineWidth:  StyleExpression;
		labelStyle:  StyleExpression;
		labelText:  StyleExpression;
		labelVerticalOrigin:  StyleExpression;
		meta:  StyleExpression;
		pointOutlineColor:  StyleExpression;
		pointOutlineWidth:  StyleExpression;
		pointSize:  StyleExpression;
		ready:  Boolean;
		readyPromise:Promise<Cesium3DTileStyle>;
		scaleByDistance:  StyleExpression;
		show:  StyleExpression;
		style:  Object;
		translucencyByDistance:  StyleExpression;
		verticalOrigin:  StyleExpression;

	}
	class CesiumInspector{
		constructor(container:Element|String,scene:Scene);
		container:  Element;
		viewModel:  CesiumInspectorViewModel;
		destroy();
		isDestroyed();
	}
	class PerformanceContainer{}
	class CesiumInspectorViewModel{
		constructor(scene:Scene,performanceContainer:PerformanceContainer);
		decrementDepthFrustum:  Command;
		depthFrustum:  Number;
		depthFrustumText:  String;
		doFilterPrimitive:  Command;
		doFilterTile:  Command;
		dropDownVisible:  Boolean;
		filterPrimitive:  Boolean;
		filterTile:  Boolean;
		frustumPlanes:  Boolean;
		frustums:  Boolean;
		frustumStatisticText:  String;
		generalSwitchText:  String;
		generalVisible:  Boolean;
		globeDepth:  Boolean;
		hasPickedPrimitive:  Boolean;
		hasPickedTile:  Boolean;
		incrementDepthFrustum:  Command;
		performance:  Boolean;
		performanceContainer:  Element;
		pickDepth:  Boolean;
		pickPrimitive:  Command;
		pickPrimitiveActive:  Boolean;
		pickTile:  Command;
		pickTileActive:  Boolean;
		primitive:  Command;
		primitiveBoundingSphere:  Boolean;
		primitiveReferenceFrame:  Boolean;
		primitivesSwitchText:  String;
		primitivesVisible:  Boolean;
		scene:  Scene;
		selectNE:  Command;
		selectNW:  Command;
		selectParent:  Command;
		selectSE:  Command;
		selectSW:  Command;
		shaderCacheText:  String;
		showPrimitiveBoundingSphere:  Command;
		showPrimitiveReferenceFrame:  Command;
		showTileBoundingSphere:  Command;
		showTileCoordinates:  Command;
		suspendUpdates:  Boolean;
		terrainSwitchText:  String;
		terrainVisible:  Boolean;
		tile:  Command;
		tileBoundingSphere:  Boolean;
		tileCoordinates:  Boolean;
		tileText:  String;
		toggleDropDown:  Command;
		toggleGeneral:  Command;
		togglePrimitives:  Command;
		toggleTerrain:  Command;
		wireframe:  Boolean;
		destroy();
		isDestroyed();
	}
	class CesiumTerrainProvider{
		constructor(options:Object);
		availability:  TileAvailability;
		credit:  Credit;
		errorEvent:  Event;
		hasVertexNormals:  Boolean;
		hasWaterMask:  Boolean;
		ready:  Boolean;
		readyPromise:  Promise<Boolean>;
		requestVertexNormals:  Boolean;
		requestWaterMask:  Boolean;
		tilingScheme:  GeographicTilingScheme;
		getLevelMaximumGeometricError(level:Number);
		getTileDataAvailable(x:Number,y:Number,level:Number);
		requestTileGeometry(x:Number,y:Number,level:Number,request:Request);
	}
	class CesiumWidget{
		constructor(container:Element|String,options:Object);
		camera:  Camera;
		canvas:  Canvas;
		clock:  Clock;
		container:  Element;
		creditContainer:  Element;
		creditViewport:  Element;
		imageryLayers:  ImageryLayerCollection;
		resolutionScale:  Number;
		scene:  Scene;
		screenSpaceEventHandler:  ScreenSpaceEventHandler;
		targetFrameRate:  Number;
		terrainProvider:  TerrainProvider;
		useDefaultRenderLoop:  Boolean;
		destroy();
		isDestroyed();
		render();
		resize();
		showErrorPanel(title:String,message:String,error:String);
	}
	class CheckerboardMaterialProperty{
		constructor(options:Object);
		definitionChanged:  Event;
		evenColor:  Property;
		isConstant:  Boolean;
		oddColor:  Property;
		repeat:  Property;
		equals(other:Property);
		getType(time:JulianDate);
		getValue(time:JulianDate,result:Object);
	}
	class CircleEmitter{
		constructor(radius:Number);
		angle:  Number;
		radius:  Number;

	}
	class CircleGeometry{
		constructor(options:Object);
		packedLength:  Number;
		createGeometry(circleGeometry:CircleGeometry);
		pack(value:CircleGeometry,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:CircleGeometry);
	}
	class CircleOutlineGeometry{
		constructor(options:Object);
		packedLength:  Number;
		createGeometry(circleGeometry:CircleOutlineGeometry);
		pack(value:CircleOutlineGeometry,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:CircleOutlineGeometry);
	}
	class ClassificationOption{
		constructor();
		BOTH:  Number;
		CESIUM_3D_TILE:  Number;
		TERRAIN:  Number;

	}
	class ClassificationPrimitive{
		constructor(options:Object);
		allowPicking:  Boolean;
		asynchronous:  Boolean;
		classificationType:  ClassificationType;
		compressVertices:  Boolean;
		debugShowBoundingVolume:  Boolean;
		debugShowShadowVolume:  Boolean;
		geometryInstances:  /*Array|*/GeometryInstance;
		interleave:  Boolean;
		ready:  Boolean;
		readyPromise:  Promise<ClassificationPrimitive>;
		releaseGeometryInstances:  Boolean;
		show:  Boolean;
		vertexCacheOptimize:  Boolean;
		isSupported(scene:Scene);
		destroy();
		getGeometryInstanceAttributes(id:Object);
		isDestroyed();
		update();
	}
	class ClippingPlaneCollection{
		constructor(options:Object);
		MAX_CLIPPING_PLANES:  number;
		edgeColor:  Color;
		edgeWidth:  Number;
		enabled:  Boolean;
		length:  Number;
		modelMatrix:  Matrix4;
		unionClippingRegions:  Boolean;
		isSupported();
		add(plane:Plane);
		clone(result:ClippingPlaneCollection);
		contains(plane:Plane);
		get(index:Number);
		remove(plane:Plane);
		removeAll();
	}
	class Clock{
		constructor(options:Object);
		canAnimate:  Boolean;
		clockRange:  ClockRange;
		clockStep:  ClockStep;
		currentTime:  JulianDate;
		multiplier:  Number;
		onTick:  Event;
		shouldAnimate:  Boolean;
		startTime:  JulianDate;
		stopTime:  JulianDate;
		tick();
	}
	class ClockRange{
		constructor();
		CLAMPED:  Number;
		LOOP_STOP:  Number;
		UNBOUNDED:  Number;

	}
	class ClockStep{
		constructor();
		SYSTEM_CLOCK:  Number;
		SYSTEM_CLOCK_MULTIPLIER:  Number;
		TICK_DEPENDENT:  Number;

	}
	class ClockViewModel{
		constructor(clock:Clock);
		canAnimate:  Boolean;
		clock:  Clock;
		clockRange:  ClockRange;
		clockStep:  ClockStep;
		currentTime:  JulianDate;
		multiplier:  Number;
		shouldAnimate:  Boolean;
		startTime:  JulianDate;
		stopTime:  JulianDate;
		systemTime:  JulianDate;
		destroy();
		isDestroyed();
		synchronize();
	}
	class clone{
		constructor(object:Object,deep:Boolean);


	}
	class Color{
		constructor(red:Number,green:Number,blue:Number,alpha:Number);
		ALICEBLUE:  Color;
		ANTIQUEWHITE:  Color;
		AQUA:  Color;
		AQUAMARINE:  Color;
		AZURE:  Color;
		BEIGE:  Color;
		BISQUE:  Color;
		BLACK:  Color;
		BLANCHEDALMOND:  Color;
		BLUE:  Color;
		BLUEVIOLET:  Color;
		BROWN:  Color;
		BURLYWOOD:  Color;
		CADETBLUE:  Color;
		CHARTREUSE:  Color;
		CHOCOLATE:  Color;
		CORAL:  Color;
		CORNFLOWERBLUE:  Color;
		CORNSILK:  Color;
		CRIMSON:  Color;
		CYAN:  Color;
		DARKBLUE:  Color;
		DARKCYAN:  Color;
		DARKGOLDENROD:  Color;
		DARKGRAY:  Color;
		DARKGREEN:  Color;
		DARKGREY:  Color;
		DARKKHAKI:  Color;
		DARKMAGENTA:  Color;
		DARKOLIVEGREEN:  Color;
		DARKORANGE:  Color;
		DARKORCHID:  Color;
		DARKRED:  Color;
		DARKSALMON:  Color;
		DARKSEAGREEN:  Color;
		DARKSLATEBLUE:  Color;
		DARKSLATEGRAY:  Color;
		DARKSLATEGREY:  Color;
		DARKTURQUOISE:  Color;
		DARKVIOLET:  Color;
		DEEPPINK:  Color;
		DEEPSKYBLUE:  Color;
		DIMGRAY:  Color;
		DIMGREY:  Color;
		DODGERBLUE:  Color;
		FIREBRICK:  Color;
		FLORALWHITE:  Color;
		FORESTGREEN:  Color;
		FUCHSIA:  Color;
		GAINSBORO:  Color;
		GHOSTWHITE:  Color;
		GOLD:  Color;
		GOLDENROD:  Color;
		GRAY:  Color;
		GREEN:  Color;
		GREENYELLOW:  Color;
		GREY:  Color;
		HONEYDEW:  Color;
		HOTPINK:  Color;
		INDIANRED:  Color;
		INDIGO:  Color;
		IVORY:  Color;
		KHAKI:  Color;
		LAVENDAR_BLUSH:  Color;
		LAVENDER:  Color;
		LAWNGREEN:  Color;
		LEMONCHIFFON:  Color;
		LIGHTBLUE:  Color;
		LIGHTCORAL:  Color;
		LIGHTCYAN:  Color;
		LIGHTGOLDENRODYELLOW:  Color;
		LIGHTGRAY:  Color;
		LIGHTGREEN:  Color;
		LIGHTGREY:  Color;
		LIGHTPINK:  Color;
		LIGHTSEAGREEN:  Color;
		LIGHTSKYBLUE:  Color;
		LIGHTSLATEGRAY:  Color;
		LIGHTSLATEGREY:  Color;
		LIGHTSTEELBLUE:  Color;
		LIGHTYELLOW:  Color;
		LIME:  Color;
		LIMEGREEN:  Color;
		LINEN:  Color;
		MAGENTA:  Color;
		MAROON:  Color;
		MEDIUMAQUAMARINE:  Color;
		MEDIUMBLUE:  Color;
		MEDIUMORCHID:  Color;
		MEDIUMPURPLE:  Color;
		MEDIUMSEAGREEN:  Color;
		MEDIUMSLATEBLUE:  Color;
		MEDIUMSPRINGGREEN:  Color;
		MEDIUMTURQUOISE:  Color;
		MEDIUMVIOLETRED:  Color;
		MIDNIGHTBLUE:  Color;
		MINTCREAM:  Color;
		MISTYROSE:  Color;
		MOCCASIN:  Color;
		NAVAJOWHITE:  Color;
		NAVY:  Color;
		OLDLACE:  Color;
		OLIVE:  Color;
		OLIVEDRAB:  Color;
		ORANGE:  Color;
		ORANGERED:  Color;
		ORCHID:  Color;
		packedLength:  Number;
		PALEGOLDENROD:  Color;
		PALEGREEN:  Color;
		PALETURQUOISE:  Color;
		PALEVIOLETRED:  Color;
		PAPAYAWHIP:  Color;
		PEACHPUFF:  Color;
		PERU:  Color;
		PINK:  Color;
		PLUM:  Color;
		POWDERBLUE:  Color;
		PURPLE:  Color;
		RED:  Color;
		ROSYBROWN:  Color;
		ROYALBLUE:  Color;
		SADDLEBROWN:  Color;
		SALMON:  Color;
		SANDYBROWN:  Color;
		SEAGREEN:  Color;
		SEASHELL:  Color;
		SIENNA:  Color;
		SILVER:  Color;
		SKYBLUE:  Color;
		SLATEBLUE:  Color;
		SLATEGRAY:  Color;
		SLATEGREY:  Color;
		SNOW:  Color;
		SPRINGGREEN:  Color;
		STEELBLUE:  Color;
		TAN:  Color;
		TEAL:  Color;
		THISTLE:  Color;
		TOMATO:  Color;
		TRANSPARENT:  Color;
		TURQUOISE:  Color;
		VIOLET:  Color;
		WHEAT:  Color;
		WHITE:  Color;
		WHITESMOKE:  Color;
		YELLOW:  Color;
		YELLOWGREEN:  Color;
		alpha:  Number;
		blue:  Number;
		green:  Number;
		red:  Number;
		add(left:Color,right:Color,result:Color);
		byteToFloat(number:Number);
		clone(color:Color,result:Color);
		divide(left:Color,right:Color,result:Color);
		divideByScalar(color:Color,scalar:Number,result:Color);
		equals(left:Color,right:Color);
		floatToByte(number:Number);
		fromAlpha(color:Color,alpha:Number,result:Color);
		fromBytes(red:Number,green:Number,blue:Number,alpha:Number,result:Color);
		fromCartesian4(cartesian:Cartesian4,result:Color);
		fromCssColorString(color:String,result:Color);
		fromHsl(hue:Number,saturation:Number,lightness:Number,alpha:Number,result:Color);
		fromRandom(options:Object,red:Number,minimumRed:Number,maximumRed:Number,green:Number,minimumGreen:Number,maximumGreen:Number,blue:Number,minimumBlue:Number,maximumBlue:Number,alpha:Number,minimumAlpha:Number,maximumAlpha:Number,result:Color);
		fromRgba(rgba:Number,result:Color);
		mod(left:Color,right:Color,result:Color);
		multiply(left:Color,right:Color,result:Color);
		multiplyByScalar(color:Color,scalar:Number,result:Color);
		pack(value:Color,array:Array<Number>,startingIndex:Number);
		subtract(left:Color,right:Color,result:Color);
		unpack(array:Array<Number>,startingIndex:Number,result:Color);
		brighten(magnitude:Number,result:Color);
		clone(result:Color);
		darken(magnitude:Number,result:Color);
		equals(other:Color);
		equalsEpsilon(other:Color,epsilon:Number);
		toBytes(result:Array<Number>);
		toCssColorString();
		toRgba();
		toString();
		withAlpha(alpha:Number,result:Color);
	}
	class ColorBlendMode{
		constructor();


	}
	class ColorGeometryInstanceAttribute{
		constructor(red:Number,green:Number,blue:Number,alpha:Number);
		componentDatatype:  ComponentDatatype;
		componentsPerAttribute:  Number;
		normalize:  Boolean;
		value:  Uint8Array;
		equals(left:ColorGeometryInstanceAttribute,right:ColorGeometryInstanceAttribute);
		fromColor(color:Color);
		toValue(color:Color,result:Uint8Array);
	}
	class ColorMaterialProperty{
		constructor(color:Property);
		color:  Property;
		definitionChanged:  Event;
		isConstant:  Boolean;
		equals(other:Property);
		getType(time:JulianDate);
		getValue(time:JulianDate,result:Object);
	}
	class combine{
		constructor(object1:Object,object2:Object,deep:Boolean);


	}
	class Command{
		constructor();
		afterExecute:  Event;
		beforeExecute:  Event;
		canExecute:  Boolean;

	}
	class ComponentDatatype{
		constructor();
		DOUBLE:  Number;
		INT:  Number;
		UNSIGNED_INT:  Number;
		BYTE:  Number;
		FLOAT:  Number;
		SHORT:  Number;
		UNSIGNED_BYTE:  Number;
		UNSIGNED_SHORT:  Number;
		createArrayBufferView(componentDatatype:ComponentDatatype,buffer:ArrayBuffer,byteOffset:Number,length:Number);
		createTypedArray(componentDatatype:ComponentDatatype,valuesOrLength:NumberArray);
		fromName(name:String);
		fromTypedArray(array:TypedArray);
		getSizeInBytes(componentDatatype:ComponentDatatype);
		validate(componentDatatype:ComponentDatatype);
	}
	class NumberArray{}
	class TypedArray{}
	class CompositeEntityCollection{
		constructor(collections:Array<EntityCollection>,owner:DataSource|CompositeEntityCollection);
		collectionChanged:  Event;
		id:  String;
		owner:  DataSource|CompositeEntityCollection;
		values:  Array<Entity>;
		addCollection(collection:EntityCollection,index:Number);
		computeAvailability();
		contains(entity:Entity);
		containsCollection(collection:EntityCollection);
		getById(id:String);
		getCollection(index:Number);
		getCollectionsLength();
		indexOfCollection(collection:EntityCollection);
		lowerCollection(collection:EntityCollection);
		lowerCollectionToBottom(collection:EntityCollection);
		raiseCollection(collection:EntityCollection);
		raiseCollectionToTop(collection:EntityCollection);
		removeAllCollections();
		removeCollection(collection:EntityCollection);
		resumeEvents();
		suspendEvents();
	}
	class CompositeMaterialProperty{
		constructor();
		definitionChanged:  Event;
		intervals:  TimeIntervalCollection;
		isConstant:  Boolean;
		equals(other:Property);
		getType(time:JulianDate);
		getValue(time:JulianDate,result:Object);
	}
	class CompositePositionProperty{
		constructor(referenceFrame:ReferenceFrame);
		definitionChanged:  Event;
		intervals:  TimeIntervalCollection;
		isConstant:  Boolean;
		referenceFrame:  ReferenceFrame;
		equals(other:Property);
		getValue(time:JulianDate,result:Object);
		getValueInReferenceFrame(time:JulianDate,referenceFrame:ReferenceFrame,result:Cartesian3);
	}
	class CompositeProperty{
		constructor();
		definitionChanged:  Event;
		intervals:  TimeIntervalCollection;
		isConstant:  Boolean;
		equals(other:Property);
		getValue(time:JulianDate,result:Object);
	}
	class ConditionsExpression{
		constructor(conditionsExpression:Object,defines:Object);
		conditionsExpression:  Object;
		evaluate(frameState:FrameState,feature:Cesium3DTileFeature,result:Object);
		evaluateColor(frameState:FrameState,feature:Cesium3DTileFeature,result:Color);
	}
	class FrameState{}
	class ConeEmitter{
		constructor(angle:Number);


	}
	class ConstantPositionProperty{
		constructor(value:Cartesian3,referenceFrame:ReferenceFrame);
		definitionChanged:  Event;
		isConstant:  Boolean;
		referenceFrame:  ReferenceFrame;
		equals(other:Property);
		getValue(time:JulianDate,result:Object);
		getValueInReferenceFrame(time:JulianDate,referenceFrame:ReferenceFrame,result:Cartesian3);
		setValue(value:Cartesian3,referenceFrame:ReferenceFrame);
	}
	class ConstantProperty{
		constructor(value:Object);
		definitionChanged:  Event;
		isConstant:  Boolean;
		equals(other:Property);
		getValue(time:JulianDate,result:Object);
		setValue(value:Object);
		toString();
		valueOf();
	}
	class CornerType{
		constructor();
		BEVELED:  Number;
		MITERED:  Number;
		ROUNDED:  Number;

	}
	class CorridorGeometry{
		constructor(options:Object);
		packedLength:  Number;
		createGeometry(corridorGeometry:CorridorGeometry);
		pack(value:CorridorGeometry,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:CorridorGeometry);
	}
	class CorridorGeometryUpdater{
		constructor(entity:Entity,scene:Scene);

		createFillGeometryInstance(time:JulianDate);
		createOutlineGeometryInstance(time:JulianDate);
	}
	class CorridorGraphics{
		constructor(options:Object);
		classificationType:  Property;
		cornerType:  Property;
		definitionChanged:  Event;
		distanceDisplayCondition:  Property;
		extrudedHeight:  Property;
		fill:  Property;
		granularity:  Property;
		height:  Property;
		material:  MaterialProperty;
		outline:  Property;
		outlineColor:  Property;
		outlineWidth:  Property;
		positions:  Property;
		shadows:  Property;
		show:  Property;
		width:  Property;
		clone(result:CorridorGraphics);
		merge(source:CorridorGraphics);
	}
	class CorridorOutlineGeometry{
		constructor(options:Object);
		packedLength:  Number;
		createGeometry(corridorOutlineGeometry:CorridorOutlineGeometry);
		pack(value:CorridorOutlineGeometry,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:CorridorOutlineGeometry);
	}
	class createCommand{
		constructor(func/*:function*/,canExecute:Boolean);
	}
	
	class createGuid{
		constructor();


	}
	class createOpenStreetMapImageryProvider{
		constructor(options:Object);


	}
	class createTangentSpaceDebugPrimitive{
		constructor(options:Object);
	}
	class createTaskProcessorWorker_WorkerFunction{}
	class createTaskProcessorWorker{
		constructor(workerFunction:createTaskProcessorWorker_WorkerFunction);
	}
	class createTileMapServiceImageryProvider{
		constructor(options:Object);


	}
	class createWorldTerrain{
		constructor(requestVertexNormals:Boolean,requestWaterMask:Boolean);


	}
	class Credit{
		constructor(options:Object);
		element:  HTMLElement;
		imageUrl:  String;
		link:  String;
		showOnScreen:  Boolean;
		text:  String;
		equals(left:Credit,right:Credit);
		equals(credit:Credit);
		hasImage();
		hasLink();
	}
	class CreditDisplay{
		constructor(container:HTMLElement,delimiter:String,viewport:HTMLElement);
		cesiumCredit:  Credit;
		container:  HTMLElement;
		addCredit(credit:Credit);
		addDefaultCredit(credit:Credit);
		beginFrame();
		destroy();
		endFrame();
		isDestroyed();
		removeDefaultCredit(credit:Credit);
		update();
	}
	class CubicRealPolynomial{
		constructor();

		computeDiscriminant(a:Number,b:Number,c:Number,d:Number);
		computeRealRoots(a:Number,b:Number,c:Number,d:Number);
	}
	class CullFace{
		constructor();
		BACK:  Number;
		FRONT:  Number;
		FRONT_AND_BACK:  Number;

	}
	class CullingVolume{
		constructor(planes:Array<Cartesian4>);
		planes:  Array<Cartesian4>;
		fromBoundingSphere(boundingSphere:BoundingSphere,result:CullingVolume);
		computeVisibility(boundingVolume:Object);
	}
	class CustomDataSource{
		constructor(name:String);
		changedEvent:  Event;
		clock:  DataSourceClock;
		clustering:  EntityCluster;
		entities:  EntityCollection;
		errorEvent:  Event;
		isLoading:  Boolean;
		loadingEvent:  Event;
		name:  String;
		show:  Boolean;

	}
	class CylinderGeometry{
		constructor(options:Object);
		packedLength:  Number;
		createGeometry(cylinderGeometry:CylinderGeometry);
		pack(value:CylinderGeometry,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:CylinderGeometry);
	}
	class CylinderGeometryUpdater{
		constructor(entity:Entity,scene:Scene);

		createFillGeometryInstance(time:JulianDate);
		createOutlineGeometryInstance(time:JulianDate);
	}
	class CylinderGraphics{
		constructor(options:Object);
		bottomRadius:  Property;
		definitionChanged:  Event;
		distanceDisplayCondition:  Property;
		fill:  Property;
		length:  Property;
		material:  MaterialProperty;
		numberOfVerticalLines:  Property;
		outline:  Property;
		outlineColor:  Property;
		outlineWidth:  Property;
		shadows:  Property;
		show:  Property;
		slices:  Property;
		topRadius:  Property;
		clone(result:CylinderGraphics);
		merge(source:CylinderGraphics);
	}
	class CylinderOutlineGeometry{
		constructor(options:Object);
		packedLength:  Number;
		createGeometry(cylinderGeometry:CylinderOutlineGeometry);
		pack(value:CylinderOutlineGeometry,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:CylinderOutlineGeometry);
	}
	class CzmlDataSource{
		constructor(name:String);
		updaters;//:  Array;
		changedEvent:  Event;
		clock:  DataSourceClock;
		clustering:  EntityCluster;
		entities:  EntityCollection;
		errorEvent:  Event;
		isLoading:  Boolean;
		loadingEvent:  Event;
		name:  String;
		show:  Boolean;
		load(czml:ResourceStringObject,options:Object,sourceUri:ResourceString);
		processMaterialPacketData(object:Object,propertyName:String,packetData:Object,interval:TimeInterval,sourceUri:String,entityCollection:EntityCollection);
		processPacketData(type/*:function*/,object:Object,propertyName:String,packetData:Object,interval:TimeInterval,sourceUri:String,entityCollection:EntityCollection);
		processPositionPacketData(object:Object,propertyName:String,packetData:Object,interval:TimeInterval,sourceUri:String,entityCollection:EntityCollection);
		load(czml:ResourceStringObject,options:Object,sourceUri:String);
		process(czml:ResourceStringObject,options:Object,sourceUri:String);
	}
	class ResourceStringObject{}
	class ResourceString{}
	class DataSource{
		constructor();
		changedEvent:  Event;
		clock:  DataSourceClock;
		clustering:  EntityCluster;
		entities:  EntityCollection;
		errorEvent:  Event;
		isLoading:  Boolean;
		loadingEvent:  Event;
		name:  String;
		show:  Boolean;
		update(time:JulianDate);
	}
	class DataSourceClock{
		constructor();
		clockRange:  ClockRange;
		clockStep:  ClockStep;
		currentTime:  JulianDate;
		definitionChanged:  Event;
		multiplier:  Number;
		startTime:  JulianDate;
		stopTime:  JulianDate;
		clone(result:DataSourceClock);
		equals(other:DataSourceClock);
		getValue();
		merge(source:DataSourceClock);
	}
	class DataSourceCollection{
		constructor();
		dataSourceAdded:  Event;
		dataSourceRemoved:  Event;
		length:  Number;
		add(dataSource:DataSource|Promise<DataSource>);
		contains(dataSource:DataSource);
		destroy();
		get(index:Number);
		indexOf(dataSource:DataSource);
		isDestroyed();
		remove(dataSource:DataSource,destroy:Boolean);
		removeAll(destroy:Boolean);
	}
	class DataSourceDisplay{
		constructor(options:Object);
		dataSources:  DataSourceCollection;
		defaultDataSource:  CustomDataSource;
		ready:  Boolean;
		scene:  Scene;
		defaultVisualizersCallback();
		destroy();
		isDestroyed();
		update(time:JulianDate);
	}
	class DebugAppearance{
		constructor(options:Object);
		attributeName:  String;
		closed:  Boolean;
		fragmentShaderSource:  String;
		glslDatatype:  String;
		material:  Material;
		renderState:  Object;
		translucent:  Boolean;
		vertexShaderSource:  String;
		getFragmentShaderSource();
		getRenderState();
		isTranslucent();
	}
	class DebugCameraPrimitive{
		constructor(options:Object);
		id:  Object;
		show:  Boolean;
		destroy();
		isDestroyed();
	}
	class DebugModelMatrixPrimitive{
		constructor(options:Object);
		id:  Object;
		length:  Number;
		modelMatrix:  Matrix4;
		show:  Boolean;
		width:  Number;
		destroy();
		isDestroyed();
	}
	class DefaultProxy{
		constructor(proxy:String);

		getURL(resource:String);
	}
	class defaultValue{
		constructor(a:any,b:any);
		EMPTY_OBJECT;

	}
	class defined{
		constructor(value:Object);


	}
	class DepthFunction{
		constructor();
		ALWAYS:  Number;
		EQUAL:  Number;
		GREATER:  Number;
		GREATER_OR_EQUAL:  Number;
		LESS:  Number;
		LESS_OR_EQUAL:  Number;
		NEVER:  Number;
		NOT_EQUAL:  Number;

	}
	class destroyObject{
		constructor(object:Object,message:String);


	}
	class DeveloperError{
		constructor(message:String);
		message:  String;
		name:  String;
		stack:  String;

	}
	class DiscardMissingTileImagePolicy{
		constructor(options:Object);

		isReady();
		shouldDiscardImage(image:Image);
	}
	class DistanceDisplayCondition{
		constructor(near:Number,far:Number);
		packedLength:  Number;
		far:  Number;
		near:  Number;
		clone(value:DistanceDisplayCondition,result:DistanceDisplayCondition);
		equals(left:DistanceDisplayCondition,right:DistanceDisplayCondition);
		pack(value:DistanceDisplayCondition,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:DistanceDisplayCondition);
		clone(result:DistanceDisplayCondition);
		equals(other:DistanceDisplayCondition);
	}
	class DistanceDisplayConditionGeometryInstanceAttribute{
		constructor(near:Number,far:Number);
		componentDatatype:  ComponentDatatype;
		componentsPerAttribute:  Number;
		normalize:  Boolean;
		value:  Float32Array;
		fromDistanceDisplayCondition(distanceDisplayCondition:DistanceDisplayCondition);
		toValue(distanceDisplayCondition:DistanceDisplayCondition,result:Float32Array);
	}
	class EasingFunction{
		constructor();
		BACK_IN:  EasingFunction;//Callback;
		BACK_IN_OUT:  EasingFunction;//_Callback;
		BACK_OUT:  EasingFunction;//_Callback;
		BOUNCE_IN:  EasingFunction;//_Callback;
		BOUNCE_IN_OUT:  EasingFunction;//_Callback;
		BOUNCE_OUT:  EasingFunction;//_Callback;
		CIRCULAR_IN:  EasingFunction;//_Callback;
		CIRCULAR_IN_OUT:  EasingFunction;//_Callback;
		CIRCULAR_OUT:  EasingFunction;//_Callback;
		CUBIC_IN:  EasingFunction;//_Callback;
		CUBIC_IN_OUT:  EasingFunction;//_Callback;
		CUBIC_OUT:  EasingFunction;//_Callback;
		ELASTIC_IN:  EasingFunction;//_Callback;
		ELASTIC_IN_OUT:  EasingFunction;//_Callback;
		ELASTIC_OUT:  EasingFunction;//_Callback;
		EXPONENTIAL_IN:  EasingFunction;//_Callback;
		EXPONENTIAL_IN_OUT:  EasingFunction;//_Callback;
		EXPONENTIAL_OUT:  EasingFunction;//_Callback;
		LINEAR_NONE:  EasingFunction;//_Callback;
		QUADRACTIC_IN:  EasingFunction;//_Callback;
		QUADRACTIC_IN_OUT:  EasingFunction;//_Callback;
		QUADRACTIC_OUT:  EasingFunction;//_Callback;
		QUARTIC_IN:  EasingFunction;//_Callback;
		QUARTIC_IN_OUT:  EasingFunction;//_Callback;
		QUARTIC_OUT:  EasingFunction;//_Callback;
		QUINTIC_IN:  EasingFunction;//_Callback;
		QUINTIC_IN_OUT:  EasingFunction;//_Callback;
		QUINTIC_OUT:  EasingFunction;//_Callback;
		SINUSOIDAL_IN:  EasingFunction;//_Callback;
		SINUSOIDAL_IN_OUT:  EasingFunction;//_Callback;
		SINUSOIDAL_OUT:  EasingFunction;//_Callback;

	}
	class EllipseGeometry{
		constructor(options:Object);
		packedLength:  Number;
		createGeometry(ellipseGeometry:EllipseGeometry);
		pack(value:EllipseGeometry,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:EllipseGeometry);
	}
	class EllipseGeometryUpdater{
		constructor(entity:Entity,scene:Scene);
		onTerrain:  Boolean;
		createFillGeometryInstance(time:JulianDate);
		createOutlineGeometryInstance(time:JulianDate);
	}
	class EllipseGraphics{
		constructor(options:Object);
		classificationType:  Property;
		definitionChanged:  Event;
		distanceDisplayCondition:  Property;
		extrudedHeight:  Property;
		fill:  Property;
		granularity:  Property;
		height:  Property;
		material:  MaterialProperty;
		numberOfVerticalLines:  Property;
		outline:  Property;
		outlineColor:  Property;
		outlineWidth:  Property;
		rotation:  Property;
		semiMajorAxis:  Property;
		semiMinorAxis:  Property;
		shadows:  Property;
		show:  Property;
		stRotation:  Property;
		clone(result:EllipseGraphics);
		merge(source:EllipseGraphics);
	}
	class EllipseOutlineGeometry{
		constructor(options:Object);
		packedLength:  Number;
		createGeometry(ellipseGeometry:EllipseOutlineGeometry);
		pack(value:EllipseOutlineGeometry,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:EllipseOutlineGeometry);
	}
	class Ellipsoid{
		constructor(x:Number,y:Number,z:Number);
		MOON:  Ellipsoid;
		packedLength:  Number;
		UNIT_SPHERE:  Ellipsoid;
		WGS84:  Ellipsoid;
		maximumRadius:  Number;
		minimumRadius:  Number;
		oneOverRadii:  Cartesian3;
		oneOverRadiiSquared:  Cartesian3;
		radii:  Cartesian3;
		radiiSquared:  Cartesian3;
		radiiToTheFourth:  Cartesian3;
		clone(ellipsoid:Ellipsoid,result:Ellipsoid);
		fromCartesian3(cartesian:Cartesian3,result:Ellipsoid);
		pack(value:Ellipsoid,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:Ellipsoid);
		cartesianArrayToCartographicArray(cartesians:Array<Cartesian3>,result:Array<Cartographic>);
		cartesianToCartographic(cartesian:Cartesian3,result:Cartographic);
		cartographicArrayToCartesianArray(cartographics:Array<Cartographic>,result:Array<Cartesian3>);
		cartographicToCartesian(cartographic:Cartographic,result:Cartesian3);
		clone(result:Ellipsoid);
		equals(right:Ellipsoid);
		geocentricSurfaceNormal(cartesian:Cartesian3,result:Cartesian3);
		geodeticSurfaceNormal(cartesian:Cartesian3,result:Cartesian3);
		geodeticSurfaceNormalCartographic(cartographic:Cartographic,result:Cartesian3);
		getSurfaceNormalIntersectionWithZAxis(position:Cartesian3,buffer:Number,result:Cartesian3);
		scaleToGeocentricSurface(cartesian:Cartesian3,result:Cartesian3);
		scaleToGeodeticSurface(cartesian:Cartesian3,result:Cartesian3);
		toString();
		transformPositionFromScaledSpace(position:Cartesian3,result:Cartesian3);
		transformPositionToScaledSpace(position:Cartesian3,result:Cartesian3);
	}
	class EllipsoidGeodesic{
		constructor(start:Cartographic,end:Cartographic,ellipsoid:Ellipsoid);
		ellipsoid:  Ellipsoid;
		end:  Cartographic;
		endHeading:  Number;
		start:  Cartographic;
		startHeading:  Number;
		surfaceDistance:  Number;
		interpolateUsingFraction(fraction:Number,result:Cartographic);
		interpolateUsingSurfaceDistance(distance:Number,result:Cartographic);
		setEndPoints(start:Cartographic,end:Cartographic);
	}
	class EllipsoidGeometry{
		constructor(options:Object);
		packedLength:  Number;
		createGeometry(ellipsoidGeometry:EllipsoidGeometry);
		pack(value:EllipsoidGeometry,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:EllipsoidGeometry);
	}
	class EllipsoidGeometryUpdater{
		constructor(entity:Entity,scene:Scene);

		createFillGeometryInstance(time:JulianDate,skipModelMatrix:Boolean,modelMatrixResult:Matrix4);
		createOutlineGeometryInstance(time:JulianDate,skipModelMatrix:Boolean,modelMatrixResult:Matrix4);
	}
	class EllipsoidGraphics{
		constructor(options:Object);
		definitionChanged:  Event;
		distanceDisplayCondition:  Property;
		fill:  Property;
		material:  MaterialProperty;
		outline:  Property;
		outlineColor:  Property;
		outlineWidth:  Property;
		radii:  Property;
		shadows:  Property;
		show:  Property;
		slicePartitions:  Property;
		stackPartitions:  Property;
		subdivisions:  Property;
		clone(result:EllipsoidGraphics);
		merge(source:EllipsoidGraphics);
	}
	class EllipsoidOutlineGeometry{
		constructor(options:Object);
		packedLength:  Number;
		createGeometry(ellipsoidGeometry:EllipsoidOutlineGeometry);
		pack(value:EllipsoidOutlineGeometry,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:EllipsoidOutlineGeometry);
	}
	class EllipsoidSurfaceAppearance{
		constructor(options:Object);
		VERTEX_FORMAT:  VertexFormat;
		aboveGround:  Boolean;
		closed:  Boolean;
		faceForward:  Boolean;
		flat:  Boolean;
		fragmentShaderSource:  String;
		material:  Material;
		renderState:  Object;
		translucent:  Boolean;
		vertexFormat:  VertexFormat;
		vertexShaderSource:  String;
		getFragmentShaderSource();
		getRenderState();
		isTranslucent();
	}
	class EllipsoidTangentPlane{
		constructor(origin:Cartesian3,ellipsoid:Ellipsoid);
		ellipsoid:  Ellipsoid;
		origin:  Cartesian3;
		plane:  Plane;
		xAxis:  Cartesian3;
		yAxis:  Cartesian3;
		fromPoints(ellipsoid:Ellipsoid,cartesians:Cartesian3);
		projectPointOntoPlane(cartesian:Cartesian3,result:Cartesian2);
		projectPointsOntoEllipsoid(cartesians:Array<Cartesian2>,result:Array<Cartesian3>);
		projectPointsOntoPlane(cartesians:Array<Cartesian3>,result:Array<Cartesian2>);
		projectPointsToNearestOnPlane(cartesians:Array<Cartesian3>,result:Array<Cartesian2>);
		projectPointToNearestOnPlane(cartesian:Cartesian3,result:Cartesian2);
	}
	class EllipsoidTerrainProvider{
		constructor(options:Object);
		credit:  Credit;
		errorEvent:  Event;
		hasVertexNormals:  Boolean;
		hasWaterMask:  Boolean;
		ready:  Boolean;
		readyPromise:  Promise<Boolean>;
		tilingScheme:  GeographicTilingScheme;
		getLevelMaximumGeometricError(level:Number);
		getTileDataAvailable(x:Number,y:Number,level:Number);
		requestTileGeometry(x:Number,y:Number,level:Number,request:Request);
	}
	class Entity{
		constructor(options:Object);
		availability:  TimeIntervalCollection;
		billboard:  BillboardGraphics;
		box:  BoxGraphics;
		corridor:  CorridorGraphics;
		cylinder:  CylinderGraphics;
		definitionChanged:  Event;
		description:  Property;
		ellipse:  EllipseGraphics;
		ellipsoid:  EllipsoidGraphics;
		entityCollection:  EntityCollection;
		id:  String;
		isShowing:  Boolean;
		label:  LabelGraphics;
		model:  ModelGraphics;
		name:  String;
		orientation:  Property;
		parent:  Entity;
		path:  PathGraphics;
		plane:  PlaneGraphics;
		point:  PointGraphics;
		polygon:  PolygonGraphics;
		polyline:  PolylineGraphics;
		polylineVolume:  PolylineVolumeGraphics;
		position:  PositionProperty;
		properties:  PropertyBag;
		propertyNames;//:  Array;
		rectangle:  RectangleGraphics;
		show:  Boolean;
		viewFrom:  Property;
		wall:  WallGraphics;
		addProperty(propertyName:String);
		computeModelMatrix(time:JulianDate,result:Matrix4);
		isAvailable(time:JulianDate);
		merge(source:Entity);
		removeProperty(propertyName:String);
	}
	class EntityCluster{
		constructor(options:Object);
		clusterBillboards:  Boolean;
		clusterEvent:  Event;
		clusterLabels:  Boolean;
		clusterPoints:  Boolean;
		enabled:  Boolean;
		minimumClusterSize:  Number;
		pixelRange:  Number;
		destroy();
	}
	class EntityCollection{
		constructor(owner:DataSource|CompositeEntityCollection);
		collectionChanged:  Event;
		id:  String;
		owner:  DataSource|CompositeEntityCollection;
		show:  Boolean;
		values:  Array<Entity>;
		collectionChangedEventCallback(collection:EntityCollection,added:Array<Entity>,removed:Array<Entity>,changed:Array<Entity>);
		add(entity:Entity);
		computeAvailability();
		contains(entity:Entity);
		getById(id:String);
		getOrCreateEntity(id:String);
		remove(entity:Entity);
		removeAll();
		removeById(id:String);
		resumeEvents();
		suspendEvents();
	}
	class EntityView{
		constructor(entity:Entity,scene:Scene,ellipsoid:Ellipsoid);
		defaultOffset3D:  Cartesian3;
		boundingSphere:  BoundingSphere;
		ellipsoid:  Ellipsoid;
		entity:  Entity;
		scene:  Scene;
		update(time:JulianDate,boundingSphere:BoundingSphere);
	}
	class Event{
		constructor();
		numberOfListeners:  Number;
		addEventListener(listener/*:function*/,scope:Object);
		raiseEvent(arguments:any);
		removeEventListener(listener/*:function*/,scope:Object);
	}
	class EventHelper{
		constructor();

		add(event:Event,listener/*:function*/,scope:Object);
		removeAll();
	}
	class Expression{
		constructor(expression:String,defines:Object);
		expression:  String;
		evaluate(frameState:FrameState,feature:Cesium3DTileFeature,result:Object);
		evaluateColor(frameState:FrameState,feature:Cesium3DTileFeature,result:Color);
	}
	class ExtrapolationType{
		constructor();
		EXTRAPOLATE:  Number;
		HOLD:  Number;
		NONE:  Number;

	}
	class FeatureDetection{
		constructor();

		supportsFullscreen();
		supportsTypedArrays();
		supportsWebWorkers();
	}
	class Fog{
		constructor();
		density:  Number;
		enabled:  Boolean;
		minimumBrightness:  Number;
		screenSpaceErrorFactor:  Number;

	}
	class formatError{
		constructor(object:Object);


	}
	class FrameRateMonitor{
		constructor(options:Object);
		defaultSettings:  Object;
		lastFramesPerSecond:  Number;
		lowFrameRate:  Event;
		minimumFrameRateAfterWarmup:  Number;
		minimumFrameRateDuringWarmup:  Number;
		nominalFrameRate:  Event;
		quietPeriod:  Number;
		samplingWindow:  Number;
		scene:  Scene;
		warmupPeriod:  Number;
		fromScene(scene:Scene);
		destroy();
		isDestroyed();
		pause();
		unpause();
	}
	class FrustumGeometry{
		constructor(options:Object);
		packedLength:  Number;
		createGeometry(frustumGeometry:FrustumGeometry);
		pack(value:FrustumGeometry,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:FrustumGeometry);
	}
	class FrustumOutlineGeometry{
		constructor(options:Object);
		packedLength:  Number;
		createGeometry(frustumGeometry:FrustumOutlineGeometry);
		pack(value:FrustumOutlineGeometry,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:FrustumOutlineGeometry);
	}
	class Fullscreen{
		constructor();
		changeEventName:  String;
		element:  Object;
		enabled:  Boolean;
		errorEventName:  String;
		fullscreen:  Boolean;
		exitFullscreen();
		requestFullscreen(element:Object,vrDevice:HMDVRDevice);
		supportsFullscreen();
	}
	class HMDVRDevice{}
	class FullscreenButton{
		constructor(container:Element|String,fullscreenElement:Element|String);
		container:  Element;
		viewModel:  FullscreenButtonViewModel;
		destroy();
		isDestroyed();
	}
	class FullscreenButtonViewModel{
		constructor(fullscreenElement:Element|String);
		command:  Command;
		fullscreenElement:  Element;
		isFullscreen:  Boolean;
		isFullscreenEnabled:  Boolean;
		tooltip:  String;
		destroy();
		isDestroyed();
	}
	class Geocoder{
		constructor(options:Object);
		container:  Element;
		searchSuggestionsContainer:  Element;
		viewModel:  GeocoderViewModel;
		destroy();
		isDestroyed();
	}
	class GeocoderService{
		constructor();

		geocode(query:String);
	}
	class GeocoderViewModel{
		constructor(options:Object);
		autoComplete:  Boolean;
		complete:  Event;
		flightDuration:  Number|undefined;
		isSearchInProgress:  Boolean;
		keepExpanded:  Boolean;
		scene:  Scene;
		search:  Command;
		searchText:  String;
		selectedSuggestion:  Object;
		suggestions:  Array<Object>;
		destroy();
	}
	class GeographicProjection{
		constructor(ellipsoid:Ellipsoid);
		ellipsoid:  Ellipsoid;
		project(cartographic:Cartographic,result:Cartesian3);
		unproject(cartesian:Cartesian3,result:Cartographic);
	}
	class GeographicTilingScheme{
		constructor(options:Object);
		ellipsoid:  Ellipsoid;
		projection:  MapProjection;
		rectangle:  Rectangle;
		getNumberOfXTilesAtLevel(level:Number);
		getNumberOfYTilesAtLevel(level:Number);
		positionToTileXY(position:Cartographic,level:Number,result:Cartesian2);
		rectangleToNativeRectangle(rectangle:Rectangle,result:Rectangle);
		tileXYToNativeRectangle(x:Number,y:Number,level:Number,result:Object);
		tileXYToRectangle(x:Number,y:Number,level:Number,result:Object);
	}
	class GeoJsonDataSource{
		constructor(name:String);
		clampToGround:  Boolean;
		crsLinkHrefs:  Object;
		crsLinkTypes:  Object;
		crsNames:  Object;
		fill:  Color;
		markerColor:  Color;
		markerSize:  Number;
		markerSymbol:  String;
		stroke:  Color;
		strokeWidth:  Number;
		changedEvent:  Event;
		clock:  DataSourceClock;
		clustering:  EntityCluster;
		entities:  EntityCollection;
		errorEvent:  Event;
		isLoading:  Boolean;
		loadingEvent:  Event;
		name:  String;
		show:  Boolean;
		load(data:ResourceStringObject,options:Object,sourceUri:String,markerSize:Number,markerSymbol:String,markerColor:Color,stroke:Color,strokeWidth:Number,fill:Color,clampToGround:Boolean);
		load(data:ResourceStringObject,options:Object,sourceUri:String,describe:GeoJsonDataSource_describe,markerSize:Number,markerSymbol:String,markerColor:Color,stroke:Color,strokeWidth:Number,fill:Color,clampToGround:Boolean);
	}
	class GeoJsonDataSource_describe{}
	class Geometry{
		constructor(options:Object);
		attributes:  GeometryAttributes;
		boundingSphere:  BoundingSphere;
		indices/*:  Array;*/
		primitiveType:  PrimitiveType;
		computeNumberOfVertices(geometry:Geometry);
	}
	class GeometryAttribute{
		constructor(options:Object);
		componentDatatype:  ComponentDatatype;
		componentsPerAttribute:  Number;
		normalize:  Boolean;
		values:  TypedArray;

	}
	class GeometryAttributes{
		constructor();
		bitangent:  GeometryAttribute;
		color:  GeometryAttribute;
		normal:  GeometryAttribute;
		position:  GeometryAttribute;
		st:  GeometryAttribute;
		tangent:  GeometryAttribute;

	}
	class GeometryInstance{
		constructor(options:Object);
		attributes:  Object;
		geometry:  Geometry;
		id:  Object;
		modelMatrix:  Matrix4;

	}
	class GeometryInstanceAttribute{
		constructor(options:Object);
		componentDatatype:  ComponentDatatype;
		componentsPerAttribute:  Number;
		normalize:  Boolean;
		value: Array<Number>;

	}
	class GeometryPipeline{
		constructor();

		compressVertices(geometry:Geometry);
		computeNormal(geometry:Geometry);
		computeTangentAndBitangent(geometry:Geometry);
		createAttributeLocations(geometry:Geometry);
		createLineSegmentsForVectors(geometry:Geometry,attributeName:String,length:Number);
		encodeAttribute(geometry:Geometry,attributeName:String,attributeHighName:String,attributeLowName:String);
		fitToUnsignedShortIndices(geometry:Geometry);
		projectTo2D(geometry:Geometry,attributeName:String,attributeName3D:String,attributeName2D:String,projection:Object);
		reorderForPostVertexCache(geometry:Geometry,cacheCapacity:Number);
		reorderForPreVertexCache(geometry:Geometry);
		toWireframe(geometry:Geometry);
		transformToWorldCoordinates(instance:GeometryInstance);
	}
	class GeometryUpdater{
		constructor(options:Object);
		classificationTypeProperty:  Property;
		createFillGeometryInstance;
		createOutlineGeometryInstance;
		distanceDisplayConditionProperty:  Property;
		entity:  Entity;
		fillEnabled:  Boolean;
		fillMaterialProperty:  MaterialProperty;
		geometryChanged:  Boolean;
		hasConstantFill:  Boolean;
		hasConstantOutline:  Boolean;
		id:  String;
		isClosed:  Boolean;
		isDynamic:  Boolean;
		outlineColorProperty:  Property;
		outlineEnabled:  Boolean;
		outlineWidth:  Number;
		shadowsProperty:  Property;
		createDynamicUpdater(primitives:PrimitiveCollection,groundPrimitives:PrimitiveCollection);
		destroy();
		isDestroyed();
		isFilled(time:JulianDate);
		isOutlineVisible(time:JulianDate);
	}
	class GeometryVisualizer{
		constructor(scene:Scene,entityCollection:EntityCollection);

		destroy();
		isDestroyed();
		update(time:JulianDate);
	}
	class getAbsoluteUri{
		constructor(relative:String,base:String);


	}
	class getBaseUri{
		constructor(uri:String,includeQuery:Boolean);


	}
	class getExtensionFromUri{
		constructor(uri:String);


	}
	class GetFeatureInfoFormat{
		constructor(type:String,format:String,callback/*:function*/);


	}
	class getFilenameFromUri{
		constructor(uri:String);


	}
	class getImagePixels{
		constructor(image:Image,width:Number,height:Number);


	}
	class getTimestamp{
		constructor();


	}

	class Globe{
		constructor(ellipsoid:Ellipsoid);
		baseColor:  Color;
		clippingPlanes:  ClippingPlaneCollection;
		depthTestAgainstTerrain:  Boolean;
		ellipsoid:  Ellipsoid;
		enableLighting:  Boolean;
		imageryLayers:  ImageryLayerCollection;
		imageryLayersUpdatedEvent:  Event;
		lightingFadeInDistance:  Number;
		lightingFadeOutDistance:  Number;
		material:  Material;
		maximumScreenSpaceError:  Number;
		oceanNormalMapUrl:  String;
		shadows:  ShadowMode;
		show:  Boolean;
		showWaterEffect:  Boolean;
		terrainProvider:  TerrainProvider;
		terrainProviderChanged:  Event;
		tileCacheSize:  Number;
		tileLoadedEvent:  Event;
		tileLoadProgressEvent:  Event;
		tilesLoaded:  Boolean;
		destroy();
		getHeight(cartographic:Cartographic);
		isDestroyed();
		pick(ray:Ray,scene:Scene,result:Cartesian3);
	}
	class GoogleEarthEnterpriseImageryProvider{
		constructor(options:Object);
		credit:  Credit;
		errorEvent:  Event;
		hasAlphaChannel:  Boolean;
		maximumLevel:  Number;
		minimumLevel:  Number;
		proxy:  Proxy;
		ready:  Boolean;
		readyPromise:  Promise<Boolean>;
		rectangle:  Rectangle;
		tileDiscardPolicy:  TileDiscardPolicy;
		tileHeight:  Number;
		tileWidth:  Number;
		tilingScheme:  TilingScheme;
		url:  String;
		getTileCredits(x:Number,y:Number,level:Number);
		pickFeatures(x:Number,y:Number,level:Number,longitude:Number,latitude:Number);
		requestImage(x:Number,y:Number,level:Number,request:Request);
	}
	class GoogleEarthEnterpriseMapsProvider{
		constructor(options:Object);
		channel:  Number;
		credit:  Credit;
		defaultGamma:  Number;
		errorEvent:  Event;
		hasAlphaChannel:  Boolean;
		maximumLevel:  Number;
		minimumLevel:  Number;
		path:  String;
		proxy:  Proxy;
		ready:  Boolean;
		readyPromise:  Promise<Boolean>;
		rectangle:  Rectangle;
		requestType:  String;
		tileDiscardPolicy:  TileDiscardPolicy;
		tileHeight:  Number;
		tileWidth:  Number;
		tilingScheme:  TilingScheme;
		url:  String;
		version:  Number;
		getTileCredits(x:Number,y:Number,level:Number);
		pickFeatures(x:Number,y:Number,level:Number,longitude:Number,latitude:Number);
		requestImage(x:Number,y:Number,level:Number,request:Request);
	}
	class GoogleEarthEnterpriseMetadata{
		constructor(resourceOrUrl:Resource|String);
		imageryPresent:  Boolean;
		key:  ArrayBuffer;
		negativeAltitudeExponentBias:  Number;
		negativeAltitudeThreshold:  Number;
		protoImagery:  Boolean;
		providers:  Object;
		proxy:  Proxy;
		readyPromise:  Promise<Boolean>;
		resource:  Resource;
		terrainPresent:  Boolean;
		url:  String;
		quadKeyToTileXY(quadkey:String);
		tileXYToQuadKey(x:Number,y:Number,level:Number);
	}
	class GoogleEarthEnterpriseTerrainData{
		constructor(options:Object);
		credits:  Array<Credit>;
		waterMask:  Uint8Array|Image|Canvas;
		interpolateHeight(rectangle:Rectangle,longitude:Number,latitude:Number);
		isChildAvailable(thisX:Number,thisY:Number,childX:Number,childY:Number);
		upsample(tilingScheme:TilingScheme,thisX:Number,thisY:Number,thisLevel:Number,descendantX:Number,descendantY:Number,descendantLevel:Number);
		wasCreatedByUpsampling();
	}
	class GoogleEarthEnterpriseTerrainProvider{
		constructor(options:Object);
		availability:  TileAvailability;
		credit:  Credit;
		errorEvent:  Event;
		hasVertexNormals:  Boolean;
		hasWaterMask:  Boolean;
		proxy:  Proxy;
		ready:  Boolean;
		readyPromise:  Promise<Boolean>;
		tilingScheme:  TilingScheme;
		url:  String;
		getLevelMaximumGeometricError(level:Number);
		getTileDataAvailable(x:Number,y:Number,level:Number);
		requestTileGeometry(x:Number,y:Number,level:Number,request:Request);
	}
	class GregorianDate{
		constructor();
		day:  Number;
		hour:  Number;
		isLeapSecond:  Boolean;
		millisecond:  Number;
		minute:  Number;
		month:  Number;
		second:  Number;
		year:  Number;

	}
	class GridImageryProvider{
		constructor(options:Object);
		credit:  Credit;
		errorEvent:  Event;
		hasAlphaChannel:  Boolean;
		maximumLevel:  Number;
		minimumLevel:  Number;
		proxy:  Proxy;
		ready:  Boolean;
		readyPromise:  Promise<Boolean>;
		rectangle:  Rectangle;
		tileDiscardPolicy:  TileDiscardPolicy;
		tileHeight:  Number;
		tileWidth:  Number;
		tilingScheme:  TilingScheme;
		_createGridCanvas();
		_drawGrid();
		getTileCredits(x:Number,y:Number,level:Number);
		pickFeatures(x:Number,y:Number,level:Number,longitude:Number,latitude:Number);
		requestImage(x:Number,y:Number,level:Number,request:Request);
	}
	class GridMaterialProperty{
		constructor(options:Object);
		cellAlpha:  Property;
		color:  Property;
		definitionChanged:  Event;
		isConstant:  Boolean;
		lineCount:  Property;
		lineOffset:  Property;
		lineThickness:  Property;
		equals(other:Property);
		getType(time:JulianDate);
		getValue(time:JulianDate,result:Object);
	}
	class GroundPrimitive{
		constructor(options:Object);
		isSupported;
		allowPicking:  Boolean;
		asynchronous:  Boolean;
		classificationType:  ClassificationType;
		compressVertices:  Boolean;
		debugShowBoundingVolume:  Boolean;
		debugShowShadowVolume:  Boolean;
		geometryInstances:  /*Array|*/GeometryInstance;
		interleave:  Boolean;
		ready:  Boolean;
		readyPromise:  Promise<GroundPrimitive>;
		releaseGeometryInstances:  Boolean;
		show:  Boolean;
		vertexCacheOptimize:  Boolean;
		initializeTerrainHeights();
		destroy();
		getGeometryInstanceAttributes(id:Object);
		isDestroyed();
		update();
	}
	class HeadingPitchRange{
		constructor(heading:Number,pitch:Number,range:Number);
		heading:  Number;
		pitch:  Number;
		range:  Number;
		clone(hpr:HeadingPitchRange,result:HeadingPitchRange);
	}
	class HeadingPitchRoll{
		constructor(heading:Number,pitch:Number,roll:Number);

		clone(headingPitchRoll:HeadingPitchRoll,result:HeadingPitchRoll);
		equals(left:HeadingPitchRoll,right:HeadingPitchRoll);
		equalsEpsilon(left:HeadingPitchRoll,right:HeadingPitchRoll,relativeEpsilon:Number,absoluteEpsilon:Number);
		fromDegrees(heading:Number,pitch:Number,roll:Number,result:HeadingPitchRoll);
		fromQuaternion(quaternion:Quaternion,result:HeadingPitchRoll);
		clone(result:HeadingPitchRoll);
		equals(right:HeadingPitchRoll);
		equalsEpsilon(right:HeadingPitchRoll,relativeEpsilon:Number,absoluteEpsilon:Number);
		toString();
	}
	class HeightmapTerrainData{
		constructor(options:Object);
		credits:  Array<Credit>;
		waterMask:  Uint8Array|Image|Canvas;
		interpolateHeight(rectangle:Rectangle,longitude:Number,latitude:Number);
		isChildAvailable(thisX:Number,thisY:Number,childX:Number,childY:Number);
		upsample(tilingScheme:TilingScheme,thisX:Number,thisY:Number,thisLevel:Number,descendantX:Number,descendantY:Number,descendantLevel:Number);
		wasCreatedByUpsampling();
	}
	class HeightReference{
		constructor();
		CLAMP_TO_GROUND:  Number;
		NONE:  Number;
		RELATIVE_TO_GROUND:  Number;

	}
	class HermitePolynomialApproximation{
		constructor();

		getRequiredDataPoints(degree:Number,inputOrder:Number);
		interpolate(x:Number,xTable:Array<Number>,yTable:Array<Number>,yStride:Number,inputOrder:Number,outputOrder:Number,result:Array<Number>);
		interpolateOrderZero(x:Number,xTable:Array<Number>,yTable:Array<Number>,yStride:Number,result:Array<Number>);
	}
	class HermiteSpline{
		constructor(options:Object);
		inTangents:  Array<Cartesian3>;
		outTangents:  Array<Cartesian3>;
		points:  Array<Cartesian3>;
		times:  Array<Number>;
		createC1(options:Object,times:Array<Number>,points:Array<Cartesian3>,tangents:Array<Cartesian3>);
		createClampedCubic(options:Object,times:Array<Number>,points:Array<Cartesian3>,firstTangent:Cartesian3,lastTangent:Cartesian3);
		createNaturalCubic(options:Object,times:Array<Number>,points:Array<Cartesian3>);
		clampTime(time:Number);
		evaluate(time:Number,result:Cartesian3);
		findTimeInterval(time:Number);
		wrapTime(time:Number);
	}
	class HomeButton{
		constructor(container:Element|String,scene:Scene,duration:Number);
		container:  Element;
		viewModel:  HomeButtonViewModel;
		destroy();
		isDestroyed();
	}
	class HomeButtonViewModel{
		constructor(scene:Scene,duration:Number);
		command:  Command;
		duration:  Number|undefined;
		scene:  Scene;
		tooltip:  String;

	}
	class HorizontalOrigin{
		constructor();
		CENTER:  Number;
		LEFT:  Number;
		RIGHT:  Number;

	}
	class ImageMaterialProperty{
		constructor(options:Object);
		color:  Property;
		definitionChanged:  Event;
		image:  Property;
		isConstant:  Boolean;
		repeat:  Property;
		transparent:  Property;
		equals(other:Property);
		getType(time:JulianDate);
		getValue(time:JulianDate,result:Object);
	}
	class ImageryLayer{
		constructor(imageryProvider:ImageryProvider,options:Object);
		DEFAULT_BRIGHTNESS:  Number;
		DEFAULT_CONTRAST:  Number;
		DEFAULT_GAMMA:  Number;
		DEFAULT_HUE:  Number;
		DEFAULT_MAGNIFICATION_FILTER:  TextureMagnificationFilter;
		DEFAULT_MINIFICATION_FILTER:  TextureMinificationFilter;
		DEFAULT_SATURATION:  Number;
		DEFAULT_SPLIT:  ImagerySplitDirection;
		alpha:  Number;
		brightness:  Number;
		contrast:  Number;
		gamma:  Number;
		hue:  Number;
		imageryProvider:  ImageryProvider;
		magnificationFilter:  TextureMagnificationFilter;
		minificationFilter:  TextureMinificationFilter;
		rectangle:  Rectangle;
		saturation:  Number;
		show:  Boolean;
		splitDirection:  ImagerySplitDirection;
		destroy();
		getViewableRectangle();
		isBaseLayer();
		isDestroyed();
	}
	class ImageryLayerCollection{
		constructor();
		layerAdded:  Event;
		layerMoved:  Event;
		layerRemoved:  Event;
		layerShownOrHidden:  Event;
		length:  Number;
		add(layer:ImageryLayer,index:Number);
		addImageryProvider(imageryProvider:ImageryProvider,index:Number);
		contains(layer:ImageryLayer);
		destroy();
		get(index:Number);
		indexOf(layer:ImageryLayer);
		isDestroyed();
		lower(layer:ImageryLayer);
		lowerToBottom(layer:ImageryLayer);
		pickImageryLayerFeatures(ray:Ray,scene:Scene);
		raise(layer:ImageryLayer);
		raiseToTop(layer:ImageryLayer);
		remove(layer:ImageryLayer,destroy:Boolean);
		removeAll(destroy:Boolean);
	}
	class ImageryLayerFeatureInfo{
		constructor();
		data:  Object;
		description:  String;
		imageryLayer:  Object;
		name:  String;
		position:  Cartographic;
		configureDescriptionFromProperties(properties:Object);
		configureNameFromProperties(properties:Object);
	}
	class ImageryProvider{
		constructor();
		credit:  Credit;
		defaultAlpha:  Number;
		defaultBrightness:  Number;
		defaultContrast:  Number;
		defaultGamma:  Number;
		defaultHue:  Number;
		defaultMagnificationFilter:  TextureMagnificationFilter;
		defaultMinificationFilter:  TextureMinificationFilter;
		defaultSaturation:  Number;
		errorEvent:  Event;
		hasAlphaChannel:  Boolean;
		maximumLevel:  Number;
		minimumLevel:  Number;
		proxy:  Proxy;
		ready:  Boolean;
		readyPromise:  Promise<Boolean>;
		rectangle:  Rectangle;
		tileDiscardPolicy:  TileDiscardPolicy;
		tileHeight:  Number;
		tileWidth:  Number;
		tilingScheme:  TilingScheme;
		loadImage(imageryProvider:ImageryProvider,url:ResourceString);
		getTileCredits(x:Number,y:Number,level:Number);
		pickFeatures(x:Number,y:Number,level:Number,longitude:Number,latitude:Number);
		requestImage(x:Number,y:Number,level:Number,request:Request);
	}
	class ImagerySplitDirection{
		constructor();
		LEFT:  Number;
		NONE:  Number;
		RIGHT:  Number;

	}

	class IndexDatatype{
		constructor();
		UNSIGNED_BYTE:  Number;
		UNSIGNED_INT:  Number;
		UNSIGNED_SHORT:  Number;
		createTypedArray(numberOfVertices:Number,indicesLengthOrArray:any);
	}
	class InfoBox{
		constructor(container:Element|String);
		container:  Element;
		frame:  HTMLIFrameElement;
		viewModel:  InfoBoxViewModel;
		destroy();
		isDestroyed();
	}
	class InfoBoxViewModel{
		constructor();
		cameraClicked:  Event;
		cameraIconPath:  String;
		closeClicked:  Event;
		description:  String;
		enableCamera:  Boolean;
		isCameraTracking:  Boolean;
		maxHeight:  Number;
		showInfo:  Boolean;
		titleText:  String;
		maxHeightOffset(offset:Number);
	}
	class InterpolationAlgorithm{
		constructor();
		type:  String;
		getRequiredDataPoints(degree:Number);
		interpolate(x:Number,xTable:Array<Number>,yTable:Array<Number>,yStride:Number,inputOrder:Number,outputOrder:Number,result:Array<Number>);
		interpolateOrderZero(x:Number,xTable:Array<Number>,yTable:Array<Number>,yStride:Number,result:Array<Number>);
	}
	class Intersect{
		constructor();
		INSIDE:  Number;
		INTERSECTING:  Number;
		OUTSIDE:  Number;

	}
	class Intersections2D{
		constructor();

		clipTriangleAtAxisAlignedThreshold(threshold:Number,keepAbove:Boolean,u0:Number,u1:Number,u2:Number,result:Array<Number>);
		computeBarycentricCoordinates(x:Number,y:Number,x1:Number,y1:Number,x2:Number,y2:Number,x3:Number,y3:Number,result:Cartesian3);
	}
	class IntersectionTests{
		constructor();

		lineSegmentSphere(p0:Cartesian3,p1:Cartesian3,sphere:BoundingSphere,result:Interval);
		lineSegmentTriangle(v0:Cartesian3,v1:Cartesian3,p0:Cartesian3,p1:Cartesian3,p2:Cartesian3,cullBackFaces:Boolean,result:Cartesian3);
		raySphere(ray:Ray,sphere:BoundingSphere,result:Interval);
		rayTriangle(ray:Ray,p0:Cartesian3,p1:Cartesian3,p2:Cartesian3,cullBackFaces:Boolean,result:Cartesian3);
		rayTriangleParametric(ray:Ray,p0:Cartesian3,p1:Cartesian3,p2:Cartesian3,cullBackFaces:Boolean);
		grazingAltitudeLocation(ray:Ray,ellipsoid:Ellipsoid);
		lineSegmentPlane(endPoint0:Cartesian3,endPoint1:Cartesian3,plane:Plane,result:Cartesian3);
		rayEllipsoid(ray:Ray,ellipsoid:Ellipsoid);
		rayPlane(ray:Ray,plane:Plane,result:Cartesian3);
		trianglePlaneIntersection(p0:Cartesian3,p1:Cartesian3,p2:Cartesian3,plane:Plane);
	}
	class Interval{
		constructor(start:Number,stop:Number);
		start:  Number;
		stop:  Number;

	}
	class Ion{
		constructor();
		defaultAccessToken:  String;
		defaultServer:  String|Resource;

	}
	class IonImageryProvider{
		constructor(options:Object);
		credit:  Credit;
		defaultAlpha:  Number;
		defaultBrightness:  Number;
		defaultContrast:  Number;
		defaultGamma:  Number;
		defaultHue:  Number;
		defaultMagnificationFilter:  TextureMagnificationFilter;
		defaultMinificationFilter:  TextureMinificationFilter;
		defaultSaturation:  Number;
		errorEvent:  Event;
		hasAlphaChannel:  Boolean;
		maximumLevel:  Number;
		minimumLevel:  Number;
		ready:  Boolean;
		readyPromise:  Promise<Boolean>;
		rectangle:  Rectangle;
		tileDiscardPolicy:  TileDiscardPolicy;
		tileHeight:  Number;
		tileWidth:  Number;
		tilingScheme:  TilingScheme;
		getTileCredits(x:Number,y:Number,level:Number);
		pickFeatures(x:Number,y:Number,level:Number,longitude:Number,latitude:Number);
		requestImage(x:Number,y:Number,level:Number,request:Request);
	}
	class Resource_RetryCallback{}
	class StringResource{}
	class IonResource{
		constructor(endpoint:Object,endpointResource:Resource);
		credits:  Array<Credit>;
		extension:  String;
		hasHeaders:  Boolean;
		headers:  Object;
		isBlobUri:  Boolean;
		isCrossOriginUrl:  Boolean;
		isDataUri:  Boolean;
		proxy:  DefaultProxy;
		queryParameters:  Object;
		request:  Request;
		retryAttempts:  Number;
		retryCallback;//:  function;
		templateValues:  Object;
		url:  String;
		fromAssetId(assetId:Number,options:Object,accessToken:String,server:StringResource);
		addQueryParameters(params:Object,useAsDefault:Boolean);
		addTemplateValues(template:Object,useAsDefault:Boolean);
		appendForwardSlash();
		appendQueryParameters(params:Object);
		clone(result:Resource);
		delete(options:Object,responseType:String,headers:Object,overrideMimeType:String);
		fetch(options:Object,responseType:String,headers:Object,overrideMimeType:String);
		fetchArrayBuffer();
		fetchBlob();
		fetchImage(preferBlob:Boolean);
		fetchJson();
		fetchJsonp(callbackParameterName:String);
		fetchText();
		fetchXML();
		getBaseUri(includeQuery:Boolean);
		getDerivedResource(options:Object,url:String,queryParameters:Object,templateValues:Object,headers:Object,proxy:DefaultProxy,retryCallback:Resource_RetryCallback,retryAttempts:Number,request:Request,preserveQueryParameters:Boolean);
		getUrlComponent(query:Boolean,proxy:Boolean);
		head(options:Object,responseType:String,headers:Object,overrideMimeType:String);
		options(options:Object,responseType:String,headers:Object,overrideMimeType:String);
		patch(data:Object,options:Object,responseType:String,headers:Object,overrideMimeType:String);
		post(data:Object,options:Object,responseType:String,headers:Object,overrideMimeType:String);
		put(data:Object,options:Object,responseType:String,headers:Object,overrideMimeType:String);
		setQueryParameters(params:Object,useAsDefault:Boolean);
		setTemplateValues(template:Object,useAsDefault:Boolean);
	}
	class isArray{
		constructor(value:Object);


	}
	class isLeapYear{
		constructor(year:Number);


	}
	class Iso8601{
		constructor();
		MAXIMUM_INTERVAL:  JulianDate;
		MAXIMUM_VALUE:  JulianDate;
		MINIMUM_VALUE:  JulianDate;

	}

	class JulianDate{
		constructor(julianDayNumber:Number,secondsOfDay:Number,timeStandard:TimeStandard);
		leapSeconds:  Array<LeapSecond>;
		dayNumber:  Number;
		secondsOfDay:  Number;
		addDays(julianDate:JulianDate,days:Number,result:JulianDate);
		addHours(julianDate:JulianDate,hours:Number,result:JulianDate);
		addMinutes(julianDate:JulianDate,minutes:Number,result:JulianDate);
		addSeconds(julianDate:JulianDate,seconds:Number,result:JulianDate);
		clone(julianDate:JulianDate,result:JulianDate);
		compare(left:JulianDate,right:JulianDate);
		computeTaiMinusUtc(julianDate:JulianDate);
		daysDifference(left:JulianDate,right:JulianDate);
		equals(left:JulianDate,right:JulianDate);
		equalsEpsilon(left:JulianDate,right:JulianDate,epsilon:Number);
		fromDate(date:Date,result:JulianDate);
		fromGregorianDate(date:GregorianDate,result:JulianDate);
		fromIso8601(iso8601String:String,result:JulianDate);
		greaterThan(left:JulianDate,right:JulianDate);
		greaterThanOrEquals(left:JulianDate,right:JulianDate);
		lessThan(left:JulianDate,right:JulianDate);
		lessThanOrEquals(left:JulianDate,right:JulianDate);
		now(result:JulianDate);
		secondsDifference(left:JulianDate,right:JulianDate);
		toDate(julianDate:JulianDate);
		toGregorianDate(julianDate:JulianDate,result:GregorianDate);
		toIso8601(julianDate:JulianDate,precision:Number);
		totalDays(julianDate:JulianDate);
		clone(result:JulianDate);
		equals(right:JulianDate);
		equalsEpsilon(right:JulianDate,epsilon:Number);
		toString();
	}
	class KeyboardEventModifier{
		constructor();
		ALT:  Number;
		CTRL:  Number;
		SHIFT:  Number;

	}
	class KmlCamera{
		constructor(position:Cartesian3,headingPitchRoll:HeadingPitchRoll);


	}
	class KmlDataSource{
		constructor(options:Object);
		changedEvent:  Event;
		clock:  DataSourceClock;
		clustering:  EntityCluster;
		entities:  EntityCollection;
		errorEvent:  Event;
		isLoading:  Boolean;
		loadingEvent:  Event;
		name:  String;
		refreshEvent:  Event;
		show:  Boolean;
		unsupportedNodeEvent:  Event;
		load(data:ResourceStringDocumentBlob,options:Object,camera:Camera,canvas:Canvas,sourceUri:String,clampToGround:Boolean,ellipsoid:Ellipsoid);
		load(data:ResourceStringDocumentBlob,options:Object,sourceUri:ResourceString,clampToGround:Boolean,query:Object,ellipsoid:Ellipsoid);
		update(time:JulianDate);
	}
	class KmlFeatureData{
		constructor();
		address:  String;
		author:  Object;
		extendedData:  String;
		link:  Object;
		phoneNumber:  String;
		snippet:  String;

	}
	class KmlLookAt{
		constructor(position:Cartesian3,headingPitchRange:HeadingPitchRange);


	}
	class ResourceStringDocumentBlob{}
	class KmlTourFlyTo_DoneCallback{}
	class KmlTourWait_DoneCallback{}
	class KMLTour{
		constructor(name:String,id:String,playlist/*:Array*/);
		entryEnd:  Event;
		entryStart:  Event;
		id;
		name;
		playlist/*:  Array;*/
		playlistIndex:  Number;
		tourEnd:  Event;
		tourStart:  Event;
		addPlaylistEntry(entry:KmlTourFlyTo|KmlTourWait);
		play(viewer:Viewer,cameraOptions:Object);
		stop();
	}
	class KmlTourFlyTo{
		constructor(duration:Number,flyToMode:String,view:KmlCamera|KmlLookAt);

		getCameraOptions(cameraOptions:Object);
		play(done:KmlTourFlyTo_DoneCallback,camera:Camera,cameraOptions:Object);
		stop();
	}
	class KmlTourWait{
		constructor(duration:Number);

		play(done:KmlTourWait_DoneCallback);
		stop();
	}
	class Label{
		constructor();
		enableRightToLeftDetection:  Boolean;
		backgroundColor:  Color;
		backgroundPadding:  Cartesian2;
		disableDepthTestDistance:  Number;
		distanceDisplayCondition:  DistanceDisplayCondition;
		eyeOffset:  Cartesian3;
		fillColor:  Color;
		font:  String;
		heightReference:  HeightReference;
		horizontalOrigin:  HorizontalOrigin;
		id:  Object;
		outlineColor:  Color;
		outlineWidth:  Number;
		pixelOffset:  Cartesian2;
		pixelOffsetScaleByDistance:  NearFarScalar;
		position:  Cartesian3;
		scale:  Number;
		scaleByDistance:  NearFarScalar;
		show:  Boolean;
		showBackground:  Boolean;
		style:  LabelStyle;
		text:  String;
		translucencyByDistance:  NearFarScalar;
		verticalOrigin:  VerticalOrigin;
		computeScreenSpacePosition(scene:Scene,result:Cartesian2);
		equals(other:Label);
		isDestroyed();
	}
	class LabelCollection{
		constructor(options:Object);
		blendOption:  BlendOption;
		debugShowBoundingVolume:  Boolean;
		length:  Number;
		modelMatrix:  Matrix4;
		add(options:Object);
		contains(label:Label);
		destroy();
		get(index:Number);
		isDestroyed();
		remove(label:Label);
		removeAll();
	}
	class LabelGraphics{
		constructor(options:Object);
		backgroundColor:  Property;
		backgroundPadding:  Property;
		definitionChanged:  Event;
		disableDepthTestDistance:  Property;
		distanceDisplayCondition:  Property;
		eyeOffset:  Property;
		fillColor:  Property;
		font:  Property;
		heightReference:  Property;
		horizontalOrigin:  Property;
		outlineColor:  Property;
		outlineWidth:  Property;
		pixelOffset:  Property;
		pixelOffsetScaleByDistance:  Property;
		scale:  Property;
		scaleByDistance:  Property;
		show:  Property;
		showBackground:  Property;
		style:  Property;
		text:  Property;
		translucencyByDistance:  Property;
		verticalOrigin:  Property;
		clone(result:LabelGraphics);
		merge(source:LabelGraphics);
	}
	class LabelStyle{
		constructor();
		FILL:  Number;
		FILL_AND_OUTLINE:  Number;
		OUTLINE:  Number;

	}
	class LabelVisualizer{
		constructor(entityCluster:EntityCluster,entityCollection:EntityCollection);

		destroy();
		isDestroyed();
		update(time:JulianDate);
	}
	class LagrangePolynomialApproximation{
		constructor();

		getRequiredDataPoints(degree:Number);
		interpolateOrderZero(x:Number,xTable:Array<Number>,yTable:Array<Number>,yStride:Number,result:Array<Number>);
	}
	class LeapSecond{
		constructor(date:JulianDate,offset:Number);
		julianDate:  JulianDate;
		offset:  Number;

	}
	class LinearApproximation{
		constructor();

		getRequiredDataPoints(degree:Number);
		interpolateOrderZero(x:Number,xTable:Array<Number>,yTable:Array<Number>,yStride:Number,result:Array<Number>);
	}
	class LinearSpline{
		constructor(options:Object);
		points:  Array<Cartesian3>;
		times:  Array<Number>;
		clampTime(time:Number);
		evaluate(time:Number,result:Cartesian3);
		findTimeInterval(time:Number);
		wrapTime(time:Number);
	}
	class loadArrayBuffer{
		constructor(urlOrResource:Resource|String,headers:Object,request:Request);


	}
	class loadBlob{
		constructor(urlOrResource:Resource|String,headers:Object,request:Request);


	}
	class loadCRN{
		constructor(resourceOrUrlOrBuffer:Resource|String|ArrayBuffer);


	}
	class loadImage{
		constructor(urlOrResource:Resource|String,allowCrossOrigin:Boolean,request:Request);


	}
	class loadImageViaBlob{
		constructor(urlOrResource:Resource|String,request:Request);


	}
	class loadJson{
		constructor(urlOrResource:Resource|String,headers:Object,request:Request);


	}
	class loadJsonp{
		constructor(urlOrResource:Resource|String,callbackParameterName:String,request:Request);


	}
	class loadKTX{
		constructor(resourceOrUrlOrBuffer:Resource|String|ArrayBuffer);


	}
	class loadText{
		constructor(urlOrResource:Resource|String,headers:Object,request:Request);


	}
	class loadWithXhr{
		constructor(options:Object);


	}
	class loadXML{
		constructor(urlOrResource:Resource|String,headers:Object,request:Request);


	}
	class MapboxImageryProvider{
		constructor(options:Object);
		credit:  Credit;
		errorEvent:  Event;
		hasAlphaChannel:  Boolean;
		maximumLevel:  Number;
		minimumLevel:  Number;
		proxy:  Proxy;
		ready:  Boolean;
		readyPromise:  Promise<Boolean>;
		rectangle:  Rectangle;
		tileDiscardPolicy:  TileDiscardPolicy;
		tileHeight:  Number;
		tileWidth:  Number;
		tilingScheme:  TilingScheme;
		url:  String;
		getTileCredits(x:Number,y:Number,level:Number);
		pickFeatures(x:Number,y:Number,level:Number,longitude:Number,latitude:Number);
		requestImage(x:Number,y:Number,level:Number,request:Request);
	}
	class MapMode2D{
		constructor();
		INFINITE_SCROLL:  Number;
		ROTATE:  Number;

	}
	class MapProjection{
		constructor();
		ellipsoid:  Ellipsoid;
		project(cartographic:Cartographic,result:Cartesian3);
		unproject(cartesian:Cartesian3,result:Cartographic);
	}
	class Material{
		constructor(options:Object);
		AlphaMapType:  String;
		BumpMapType:  String;
		CheckerboardType:  String;
		ColorType:  String;
		DefaultCubeMapId:  String;
		DefaultImageId:  String;
		DiffuseMapType:  String;
		DotType:  String;
		ElevationContourType:  String;
		ElevationRampType:  String;
		EmissionMapType:  String;
		FadeType:  String;
		GridType:  String;
		ImageType:  String;
		NormalMapType:  String;
		PolylineArrowType:  String;
		PolylineDashType:  String;
		PolylineGlowType:  String;
		PolylineOutlineType:  String;
		RimLightingType:  String;
		SlopeRampMaterialType:  String;
		SpecularMapType:  String;
		StripeType:  String;
		WaterType:  String;
		materials:  Object;
		shaderSource:  String;
		translucent:  Boolean/*|function*/;
		type:  String;
		uniforms:  Object;
		fromType(type:String,uniforms:Object);
		destroy();
		isDestroyed();
		isTranslucent();
	}
	class MaterialAppearance{
		constructor(options:Object);
		MaterialSupport;
		closed:  Boolean;
		faceForward:  Boolean;
		flat:  Boolean;
		fragmentShaderSource:  String;
		material:  Material;
		materialSupport/*:  MaterialAppearance_MaterialSupport*/;
		renderState:  Object;
		translucent:  Boolean;
		vertexFormat:  VertexFormat;
		vertexShaderSource:  String;
		getFragmentShaderSource();
		getRenderState();
		isTranslucent();
	}
	class MaterialProperty{
		constructor();
		definitionChanged:  Event;
		isConstant:  Boolean;
		equals(other:Property);
		getType(time:JulianDate);
		getValue(time:JulianDate,result:Object);
	}
	class Math{
		constructor();
		cbrt;
		DEGREES_PER_RADIAN:  Number;
		EPSILON1:  Number;
		EPSILON2:  Number;
		EPSILON3:  Number;
		EPSILON4:  Number;
		EPSILON5:  Number;
		EPSILON6:  Number;
		EPSILON7:  Number;
		EPSILON8:  Number;
		EPSILON9:  Number;
		EPSILON10:  Number;
		EPSILON11:  Number;
		EPSILON12:  Number;
		EPSILON13:  Number;
		EPSILON14:  Number;
		EPSILON15:  Number;
		EPSILON16:  Number;
		EPSILON17:  Number;
		EPSILON18:  Number;
		EPSILON19:  Number;
		EPSILON20:  Number;
		GRAVITATIONALPARAMETER:  Number;
		LUNAR_RADIUS:  Number;
		ONE_OVER_PI:  Number;
		ONE_OVER_TWO_PI:  Number;
		PI:  Number;
		PI_OVER_FOUR:  Number;
		PI_OVER_SIX:  Number;
		PI_OVER_THREE:  Number;
		PI_OVER_TWO:  Number;
		RADIANS_PER_ARCSECOND:  Number;
		RADIANS_PER_DEGREE:  Number;
		SIXTY_FOUR_KILOBYTES:  Number;
		SOLAR_RADIUS:  Number;
		THREE_PI_OVER_TWO:  Number;
		TWO_PI:  Number;
		acosClamped(value:Number);
		asinClamped(value:Number);
		chordLength(angle:Number,radius:Number);
		clamp(value:Number,min:Number,max:Number);
		clampToLatitudeRange(angle:Number);
		convertLongitudeRange(angle:Number);
		cosh(value:Number);
		equalsEpsilon(left:Number,right:Number,relativeEpsilon:Number,absoluteEpsilon:Number);
		factorial(n:Number);
		fromSNorm(value:Number,rangeMax:Number);
		incrementWrap(n:Number,maximumValue:Number,minimumValue:Number);
		isPowerOfTwo(n:Number);
		lerp(p:Number,q:Number,time:Number);
		logBase(number:Number,base:Number);
		mod(m:Number,n:Number);
		negativePiToPi(angle:Number);
		nextPowerOfTwo(n:Number);
		nextRandomNumber();
		randomBetween(min:Number,max:Number);
		setRandomNumberSeed(seed:Number);
		sign(value:Number);
		signNotZero(value:Number);
		sinh(value:Number);
		toDegrees(radians:Number);
		toRadians(degrees:Number);
		toSNorm(value:Number,rangeMax:Number);
		zeroToTwoPi(angle:Number);
	}
	class Matrix2{
		constructor(column0Row0:Number,column1Row0:Number,column0Row1:Number,column1Row1:Number);
		length:  Number;
		COLUMN0ROW0:  Number;
		COLUMN0ROW1:  Number;
		COLUMN1ROW0:  Number;
		COLUMN1ROW1:  Number;
		IDENTITY:  Matrix2;
		packedLength:  Number;
		ZERO:  Matrix2;
		clone(result:Matrix2);
		equals(right:Matrix2);
		equalsEpsilon(right:Matrix2,epsilon:Number);
		toString();
		abs(matrix:Matrix2,result:Matrix2);
		add(left:Matrix2,right:Matrix2,result:Matrix2);
		clone(matrix:Matrix2,result:Matrix2);
		equals(left:Matrix2,right:Matrix2);
		equalsEpsilon(left:Matrix2,right:Matrix2,epsilon:Number);
		fromArray(array:Array<Number>,startingIndex:Number,result:Matrix2);
		fromColumnMajorArray(values:Array<Number>,result:Matrix2);
		fromRotation(angle:Number,result:Matrix2);
		fromRowMajorArray(values:Array<Number>,result:Matrix2);
		fromScale(scale:Cartesian2,result:Matrix2);
		fromUniformScale(scale:Number,result:Matrix2);
		getColumn(matrix:Matrix2,index:Number,result:Cartesian2);
		getElementIndex(row:Number,column:Number);
		getMaximumScale(matrix:Matrix2);
		getRow(matrix:Matrix2,index:Number,result:Cartesian2);
		getScale(matrix:Matrix2,result:Cartesian2);
		multiply(left:Matrix2,right:Matrix2,result:Matrix2);
		multiplyByScalar(matrix:Matrix2,scalar:Number,result:Matrix2);
		multiplyByScale(matrix:Matrix2,scale:Cartesian2,result:Matrix2);
		multiplyByVector(matrix:Matrix2,cartesian:Cartesian2,result:Cartesian2);
		negate(matrix:Matrix2,result:Matrix2);
		pack(value:Matrix2,array:Array<Number>,startingIndex:Number);
		setColumn(matrix:Matrix2,index:Number,cartesian:Cartesian2,result:Cartesian2);
		setRow(matrix:Matrix2,index:Number,cartesian:Cartesian2,result:Matrix2);
		subtract(left:Matrix2,right:Matrix2,result:Matrix2);
		toArray(matrix:Matrix2,result:Array<Number>);
		transpose(matrix:Matrix2,result:Matrix2);
		unpack(array:Array<Number>,startingIndex:Number,result:Matrix2);
	}
	class Matrix3{
		constructor(column0Row0:Number,column1Row0:Number,column2Row0:Number,column0Row1:Number,column1Row1:Number,column2Row1:Number,column0Row2:Number,column1Row2:Number,column2Row2:Number);
		length:  Number;
		COLUMN0ROW0:  Number;
		COLUMN0ROW1:  Number;
		COLUMN0ROW2:  Number;
		COLUMN1ROW0:  Number;
		COLUMN1ROW1:  Number;
		COLUMN1ROW2:  Number;
		COLUMN2ROW0:  Number;
		COLUMN2ROW1:  Number;
		COLUMN2ROW2:  Number;
		IDENTITY:  Matrix3;
		packedLength:  Number;
		ZERO:  Matrix3;
		clone(result:Matrix3);
		equals(right:Matrix3);
		equalsEpsilon(right:Matrix3,epsilon:Number);
		toString();
		abs(matrix:Matrix3,result:Matrix3);
		add(left:Matrix3,right:Matrix3,result:Matrix3);
		clone(matrix:Matrix3,result:Matrix3);
		computeEigenDecomposition(matrix:Matrix3,result:Object);
		determinant(matrix:Matrix3);
		equals(left:Matrix3,right:Matrix3);
		equalsEpsilon(left:Matrix3,right:Matrix3,epsilon:Number);
		fromArray(array:Array<Number>,startingIndex:Number,result:Matrix3);
		fromColumnMajorArray(values:Array<Number>,result:Matrix3);
		fromCrossProduct(vector:Cartesian3,result:Matrix3);
		fromHeadingPitchRoll(headingPitchRoll:HeadingPitchRoll,result:Matrix3);
		fromQuaternion(quaternion:Quaternion,result:Matrix3);
		fromRotationX(angle:Number,result:Matrix3);
		fromRotationY(angle:Number,result:Matrix3);
		fromRotationZ(angle:Number,result:Matrix3);
		fromRowMajorArray(values:Array<Number>,result:Matrix3);
		fromScale(scale:Cartesian3,result:Matrix3);
		fromUniformScale(scale:Number,result:Matrix3);
		getColumn(matrix:Matrix3,index:Number,result:Cartesian3);
		getElementIndex(row:Number,column:Number);
		getMaximumScale(matrix:Matrix3);
		getRow(matrix:Matrix3,index:Number,result:Cartesian3);
		getScale(matrix:Matrix3,result:Cartesian3);
		inverse(matrix:Matrix3,result:Matrix3);
		multiply(left:Matrix3,right:Matrix3,result:Matrix3);
		multiplyByScalar(matrix:Matrix3,scalar:Number,result:Matrix3);
		multiplyByScale(matrix:Matrix3,scale:Cartesian3,result:Matrix3);
		multiplyByVector(matrix:Matrix3,cartesian:Cartesian3,result:Cartesian3);
		negate(matrix:Matrix3,result:Matrix3);
		pack(value:Matrix3,array:Array<Number>,startingIndex:Number);
		setColumn(matrix:Matrix3,index:Number,cartesian:Cartesian3,result:Matrix3);
		setRow(matrix:Matrix3,index:Number,cartesian:Cartesian3,result:Matrix3);
		subtract(left:Matrix3,right:Matrix3,result:Matrix3);
		toArray(matrix:Matrix3,result:Array<Number>);
		transpose(matrix:Matrix3,result:Matrix3);
		unpack(array:Array<Number>,startingIndex:Number,result:Matrix3);
	}
	class Matrix4{
		constructor(column0Row0:Number,column1Row0:Number,column2Row0:Number,column3Row0:Number,column0Row1:Number,column1Row1:Number,column2Row1:Number,column3Row1:Number,column0Row2:Number,column1Row2:Number,column2Row2:Number,column3Row2:Number,column0Row3:Number,column1Row3:Number,column2Row3:Number,column3Row3:Number);
		length:  Number;
		COLUMN0ROW0:  Number;
		COLUMN0ROW1:  Number;
		COLUMN0ROW2:  Number;
		COLUMN0ROW3:  Number;
		COLUMN1ROW0:  Number;
		COLUMN1ROW1:  Number;
		COLUMN1ROW2:  Number;
		COLUMN1ROW3:  Number;
		COLUMN2ROW0:  Number;
		COLUMN2ROW1:  Number;
		COLUMN2ROW2:  Number;
		COLUMN2ROW3:  Number;
		COLUMN3ROW0:  Number;
		COLUMN3ROW1:  Number;
		COLUMN3ROW2:  Number;
		COLUMN3ROW3:  Number;
		IDENTITY:  Matrix4;
		packedLength:  Number;
		ZERO:  Matrix4;
		clone(result:Matrix4);
		equals(right:Matrix4);
		equalsEpsilon(right:Matrix4,epsilon:Number);
		toString();
		abs(matrix:Matrix4,result:Matrix4);
		add(left:Matrix4,right:Matrix4,result:Matrix4);
		clone(matrix:Matrix4,result:Matrix4);
		computeInfinitePerspectiveOffCenter(left:Number,right:Number,bottom:Number,top:Number,near:Number,result:Matrix4);
		computeOrthographicOffCenter(left:Number,right:Number,bottom:Number,top:Number,near:Number,far:Number,result:Matrix4);
		computePerspectiveFieldOfView(fovY:Number,aspectRatio:Number,near:Number,far:Number,result:Matrix4);
		computePerspectiveOffCenter(left:Number,right:Number,bottom:Number,top:Number,near:Number,far:Number,result:Matrix4);
		computeView(position:Cartesian3,direction:Cartesian3,up:Cartesian3,right:Cartesian3,result:Matrix4);
		computeViewportTransformation(viewport:Object,nearDepthRange:Number,farDepthRange:Number,result:Matrix4);
		equals(left:Matrix4,right:Matrix4);
		equalsEpsilon(left:Matrix4,right:Matrix4,epsilon:Number);
		fromArray(array:Array<Number>,startingIndex:Number,result:Matrix4);
		fromCamera(camera:Camera,result:Matrix4);
		fromColumnMajorArray(values:Array<Number>,result:Matrix4);
		fromRotationTranslation(rotation:Matrix3,translation:Cartesian3,result:Matrix4);
		fromRowMajorArray(values:Array<Number>,result:Matrix4);
		fromScale(scale:Cartesian3,result:Matrix4);
		fromTranslation(translation:Cartesian3,result:Matrix4);
		fromTranslationQuaternionRotationScale(translation:Cartesian3,rotation:Quaternion,scale:Cartesian3,result:Matrix4);
		fromTranslationRotationScale(translationRotationScale:TranslationRotationScale,result:Matrix4);
		fromUniformScale(scale:Number,result:Matrix4);
		getColumn(matrix:Matrix4,index:Number,result:Cartesian4);
		getElementIndex(row:Number,column:Number);
		getMaximumScale(matrix:Matrix4);
		getRotation(matrix:Matrix4,result:Matrix3);
		getRow(matrix:Matrix4,index:Number,result:Cartesian4);
		getScale(matrix:Matrix4,result:Cartesian3);
		getTranslation(matrix:Matrix4,result:Cartesian3);
		inverse(matrix:Matrix4,result:Matrix4);
		inverseTransformation(matrix:Matrix4,result:Matrix4);
		multiply(left:Matrix4,right:Matrix4,result:Matrix4);
		multiplyByMatrix3(matrix:Matrix4,rotation:Matrix3,result:Matrix4);
		multiplyByPoint(matrix:Matrix4,cartesian:Cartesian3,result:Cartesian3);
		multiplyByPointAsVector(matrix:Matrix4,cartesian:Cartesian3,result:Cartesian3);
		multiplyByScalar(matrix:Matrix4,scalar:Number,result:Matrix4);
		multiplyByScale(matrix:Matrix4,scale:Cartesian3,result:Matrix4);
		multiplyByTranslation(matrix:Matrix4,translation:Cartesian3,result:Matrix4);
		multiplyByUniformScale(matrix:Matrix4,scale:Number,result:Matrix4);
		multiplyByVector(matrix:Matrix4,cartesian:Cartesian4,result:Cartesian4);
		multiplyTransformation(left:Matrix4,right:Matrix4,result:Matrix4);
		negate(matrix:Matrix4,result:Matrix4);
		pack(value:Matrix4,array:Array<Number>,startingIndex:Number);
		setColumn(matrix:Matrix4,index:Number,cartesian:Cartesian4,result:Matrix4);
		setRow(matrix:Matrix4,index:Number,cartesian:Cartesian4,result:Matrix4);
		setTranslation(matrix:Matrix4,translation:Cartesian3,result:Cartesian4);
		subtract(left:Matrix4,right:Matrix4,result:Matrix4);
		toArray(matrix:Matrix4,result:Array<Number>);
		transpose(matrix:Matrix4,result:Matrix4);
		unpack(array:Array<Number>,startingIndex:Number,result:Matrix4);
	}
	class mergeSort{
		constructor(array/*:Array*/,comparator:mergeSort_Comparator,userDefinedObject:Object);
	}
	class mergeSort_Comparator{}
	class Model{
		constructor(options:Object);
		activeAnimations:  ModelAnimationCollection;
		allowPicking:  Boolean;
		asynchronous:  Boolean;
		basePath:  String;
		boundingSphere:  BoundingSphere;
		clampAnimations:  Boolean;
		clippingPlanes:  ClippingPlaneCollection;
		color:  Color;
		colorBlendAmount:  Number;
		colorBlendMode:  ColorBlendMode;
		debugShowBoundingVolume:  Boolean;
		debugWireframe:  Boolean;
		distanceDisplayCondition:  DistanceDisplayCondition;
		gltf:  Object;
		id:  Object;
		incrementallyLoadTextures:  Boolean;
		maximumScale:  Number;
		minimumPixelSize:  Number;
		modelMatrix:  Matrix4;
		pendingTextureLoads:  Number;
		ready:  Boolean;
		readyPromise:  Promise<Model>;
		scale:  Number;
		shadows:  ShadowMode;
		show:  Boolean;
		silhouetteColor:  Color;
		silhouetteSize:  Number;
		fromGltf(options:Object,url:ResourceString,basePath:ResourceString,show:Boolean,modelMatrix:Matrix4,scale:Number,minimumPixelSize:Number,maximumScale:Number,id:Object,allowPicking:Boolean,incrementallyLoadTextures:Boolean,asynchronous:Boolean,clampAnimations:Boolean,shadows:ShadowMode,debugShowBoundingVolume:Boolean,debugWireframe:Boolean,heightReference:HeightReference,scene:Scene,distanceDisplayCondition:DistanceDisplayCondition,color:Color,colorBlendMode:ColorBlendMode,colorBlendAmount:Number,silhouetteColor:Color,silhouetteSize:Number,clippingPlanes:ClippingPlaneCollection);
		silhouetteSupported(scene:Scene);
		destroy();
		getMaterial(name:String);
		getMesh(name:String);
		getNode(name:String);
		isDestroyed();
		update();
	}
	class ModelAnimation{
		constructor();
		delay:  Number;
		loop:  ModelAnimationLoop;
		name:  String;
		removeOnStop:  Boolean;
		reverse:  Boolean;
		speedup:  Number;
		start:  Event;
		startTime:  JulianDate;
		stop:  Event;
		stopTime:  JulianDate;
		update:  Event;

	}
	class ModelAnimationCollection{
		constructor();
		animationAdded:  Event;
		animationRemoved:  Event;
		length:  Number;
		add(options:Object,name:String,index:Number,startTime:JulianDate,delay:Number,stopTime:JulianDate,removeOnStop:Boolean,speedup:Number,reverse:Boolean,loop:ModelAnimationLoop);
		addAll(options:Object,startTime:JulianDate,delay:Number,stopTime:JulianDate,removeOnStop:Boolean,speedup:Number,reverse:Boolean,loop:ModelAnimationLoop);
		contains(animation:ModelAnimation);
		get(index:Number);
		remove(animation:ModelAnimation);
		removeAll();
	}
	class ModelAnimationLoop{
		constructor();
		MIRRORED_REPEAT:  Number;
		NONE:  Number;
		REPEAT:  Number;

	}
	class ModelGraphics{
		constructor(options:Object);
		clampAnimations:  Property;
		clippingPlanes:  Property;
		color:  Property;
		colorBlendAmount:  Property;
		colorBlendMode:  Property;
		definitionChanged:  Event;
		distanceDisplayCondition:  Property;
		heightReference:  Property;
		incrementallyLoadTextures:  Property;
		maximumScale:  Property;
		minimumPixelSize:  Property;
		nodeTransformations:  PropertyBag;
		runAnimations:  Property;
		scale:  Property;
		shadows:  Property;
		show:  Property;
		silhouetteColor:  Property;
		silhouetteSize:  Property;
		uri:  Property;
		clone(result:ModelGraphics);
		merge(source:ModelGraphics);
	}
	class ModelMaterial{
		constructor();
		id:  String;
		name:  String;
		getValue(name:String);
		setValue(name:String,value:Object);
	}
	class ModelMesh{
		constructor();
		id:  String;
		materials:  Array<ModelMaterial>;
		name:  String;

	}
	class ModelNode{
		constructor();
		id:  String;
		matrix:  Matrix4;
		name:  String;
		show:  Boolean;

	}
	class ModelVisualizer{
		constructor(scene:Scene,entityCollection:EntityCollection);

		destroy();
		isDestroyed();
		update(time:JulianDate);
	}
	class Moon{
		constructor(options:Object);
		ellipsoid:  Ellipsoid;
		onlySunLighting:  Boolean;
		show:  Boolean;
		textureUrl:  String;
		destroy();
		isDestroyed();
	}
	class NavigationHelpButton{
		constructor(options:Object);
		container:  Element;
		viewModel:  NavigationHelpButtonViewModel;
		destroy();
		isDestroyed();
	}
	class NavigationHelpButtonViewModel{
		constructor();
		command:  Command;
		showClick:  Command;
		showInstructions:  Boolean;
		showTouch:  Command;
		tooltip:  String;

	}
	class NearFarScalar{
		constructor(near:Number,nearValue:Number,far:Number,farValue:Number);
		packedLength:  Number;
		far:  Number;
		farValue:  Number;
		near:  Number;
		nearValue:  Number;
		clone(nearFarScalar:NearFarScalar,result:NearFarScalar);
		equals(left:NearFarScalar,right:NearFarScalar);
		pack(value:NearFarScalar,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:NearFarScalar);
		clone(result:NearFarScalar);
		equals(right:NearFarScalar);
	}
	class NeverTileDiscardPolicy{
		constructor();

		isReady();
		shouldDiscardImage(image:Image);
	}
	class NodeTransformationProperty{
		constructor(options:Object);
		definitionChanged:  Event;
		isConstant:  Boolean;
		rotation:  Property;
		scale:  Property;
		translation:  Property;
		equals(other:Property);
		getValue(time:JulianDate,result:TranslationRotationScale);
	}
	class objectToQuery{
		constructor(obj:Object);


	}
	class Occluder{
		constructor(occluderBoundingSphere:BoundingSphere,cameraPosition:Cartesian3);
		cameraPosition:  Cartesian3;
		position:  Cartesian3;
		radius:  Number;
		computeOccludeePoint(occluderBoundingSphere:BoundingSphere,occludeePosition:Cartesian3,positions:Array<Cartesian3>);
		computeOccludeePointFromRectangle(rectangle:Rectangle,ellipsoid:Ellipsoid);
		fromBoundingSphere(occluderBoundingSphere:BoundingSphere,cameraPosition:Cartesian3,result:Occluder);
		computeVisibility(occludeeBS:BoundingSphere);
		isBoundingSphereVisible(occludee:BoundingSphere);
		isPointVisible(occludee:Cartesian3);
	}
	class OrientedBoundingBox{
		constructor(center:Cartesian3,halfAxes:Matrix3);
		packedLength:  Number;
		center:  Cartesian3;
		halfAxes:  Matrix3;
		clone(box:OrientedBoundingBox,result:OrientedBoundingBox);
		computePlaneDistances(box:OrientedBoundingBox,position:Cartesian3,direction:Cartesian3,result:Interval);
		distanceSquaredTo(box:OrientedBoundingBox,cartesian:Cartesian3);
		equals(left:OrientedBoundingBox,right:OrientedBoundingBox);
		fromPoints(positions:Array<Cartesian3>,result:OrientedBoundingBox);
		fromRectangle(rectangle:Rectangle,minimumHeight:Number,maximumHeight:Number,ellipsoid:Ellipsoid,result:OrientedBoundingBox);
		intersectPlane(box:OrientedBoundingBox,plane:Plane);
		isOccluded(box:OrientedBoundingBox,occluder:Occluder);
		pack(value:OrientedBoundingBox,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:OrientedBoundingBox);
		clone(result:OrientedBoundingBox);
		computePlaneDistances(position:Cartesian3,direction:Cartesian3,result:Interval);
		distanceSquaredTo(cartesian:Cartesian3);
		equals(right:OrientedBoundingBox);
		intersectPlane(plane:Plane);
		isOccluded(occluder:Occluder);
	}
	class OrthographicFrustum{
		constructor(options:Object);
		packedLength:  Number;
		aspectRatio:  Number;
		far:  Number;
		near:  Number;
		projectionMatrix:  Matrix4;
		width:  Number;
		pack(value:OrthographicFrustum,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:OrthographicFrustum);
		clone(result:OrthographicFrustum);
		computeCullingVolume(position:Cartesian3,direction:Cartesian3,up:Cartesian3);
		equals(other:OrthographicFrustum);
		getPixelDimensions(drawingBufferWidth:Number,drawingBufferHeight:Number,distance:Number,result:Cartesian2);
	}
	class OrthographicOffCenterFrustum{
		constructor(options:Object);
		bottom:  Number;
		far:  Number;
		left:  Number;
		near:  Number;
		projectionMatrix:  Matrix4;
		right:  Number;
		top:  Number;
		clone(result:OrthographicOffCenterFrustum);
		computeCullingVolume(position:Cartesian3,direction:Cartesian3,up:Cartesian3);
		equals(other:OrthographicOffCenterFrustum);
		getPixelDimensions(drawingBufferWidth:Number,drawingBufferHeight:Number,distance:Number,result:Cartesian2);
	}
	class Packable{
		constructor();
		packedLength:  Number;
		pack(value:Object,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:Object);
	}
	class PackableForInterpolation{
		constructor();
		packedInterpolationLength:  Number;
		convertPackedArrayForInterpolation(packedArray:Array<Number>,startingIndex:Number,lastIndex:Number,result:Array<Number>);
		unpackInterpolationResult(array:Array<Number>,sourceArray:Array<Number>,startingIndex:Number,lastIndex:Number,result:Object);
	}
	class Particle{
		constructor(options:Object);
		age:  Number;
		endColor:  Color;
		endScale:  Number;
		image:  Object;
		life:  Number;
		mass:  Number;
		normalizedAge:  Number;
		position:  Cartesian3;
		size:  Cartesian2;
		startColor:  Color;
		startScale:  Number;
		velocity:  Cartesian3;

	}
	class ParticleBurst{
		constructor(options:Object);
		complete:  Boolean;
		maximum:  Number;
		minimum:  Number;
		time:  Number;

	}
	class ParticleEmitter{
		constructor();


	}
	class ParticleSystem_applyForce{}
	class ParticleSystem{
		constructor(options:Object);
		complete:  Event;
		emitter:  ParticleEmitter;
		emitterModelMatrix:  Matrix4;
		endColor:  Color;
		endScale:  Number;
		forces:  Array<ParticleSystem_applyForce>;
		image:  Object;
		isComplete:  Boolean;
		lifeTime:  Number;
		loop:  Boolean;
		maximumHeight:  Number;
		maximumLife:  Number;
		maximumMass:  Number;
		maximumSpeed:  Number;
		maximumWidth:  Number;
		minimumHeight:  Number;
		minimumLife:  Number;
		minimumMass:  Number;
		minimumSpeed:  Number;
		minimumWidth:  Number;
		modelMatrix:  Matrix4;
		rate:  Number;
		show:  Boolean;
		startColor:  Color;
		startScale:  Number;
		destroy();
		isDestroyed();
	}
	class PathGraphics{
		constructor(options:Object);
		definitionChanged:  Event;
		distanceDisplayCondition:  Property;
		leadTime:  Property;
		material:  MaterialProperty;
		resolution:  Property;
		show:  Property;
		trailTime:  Property;
		width:  Property;
		clone(result:PathGraphics);
		merge(source:PathGraphics);
	}
	class PathVisualizer{
		constructor(scene:Scene,entityCollection:EntityCollection);

		destroy();
		isDestroyed();
		update(time:JulianDate);
	}
	class PerformanceWatchdog{
		constructor(options:Object);
		container:  Element;
		viewModel:  PerformanceWatchdogViewModel;
		destroy();
		isDestroyed();
	}
	class PerformanceWatchdogViewModel{
		constructor(options:Object);
		dismissMessage:  Command;
		lowFrameRateMessage:  String;
		lowFrameRateMessageDismissed:  Boolean;
		scene:  Scene;
		showingLowFrameRateMessage:  Boolean;

	}
	class PerInstanceColorAppearance{
		constructor(options:Object);
		FLAT_VERTEX_FORMAT:  VertexFormat;
		VERTEX_FORMAT:  VertexFormat;
		closed:  Boolean;
		faceForward:  Boolean;
		flat:  Boolean;
		fragmentShaderSource:  String;
		material:  Material;
		renderState:  Object;
		translucent:  Boolean;
		vertexFormat:  VertexFormat;
		vertexShaderSource:  String;
		getFragmentShaderSource();
		getRenderState();
		isTranslucent();
	}
	class PerspectiveFrustum{
		constructor(options:Object);
		packedLength:  Number;
		aspectRatio:  Number;
		far:  Number;
		fov:  Number;
		fovy:  Number;
		infiniteProjectionMatrix:  Matrix4;
		near:  Number;
		projectionMatrix:  Matrix4;
		xOffset:  Number;
		yOffset:  Number;
		pack(value:PerspectiveFrustum,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:PerspectiveFrustum);
		clone(result:PerspectiveFrustum);
		computeCullingVolume(position:Cartesian3,direction:Cartesian3,up:Cartesian3);
		equals(other:PerspectiveFrustum);
		getPixelDimensions(drawingBufferWidth:Number,drawingBufferHeight:Number,distance:Number,result:Cartesian2);
	}
	class PerspectiveOffCenterFrustum{
		constructor(options:Object);
		bottom:  Number;
		far:  Number;
		infiniteProjectionMatrix:  Matrix4;
		left:  Number;
		near:  Number;
		projectionMatrix:  Matrix4;
		right:  Number;
		top:  Number;
		clone(result:PerspectiveOffCenterFrustum);
		computeCullingVolume(position:Cartesian3,direction:Cartesian3,up:Cartesian3);
		equals(other:PerspectiveOffCenterFrustum);
		getPixelDimensions(drawingBufferWidth:Number,drawingBufferHeight:Number,distance:Number,result:Cartesian2);
	}
	class PinBuilder{
		constructor();

		fromColor(color:Color,size:Number);
		fromMakiIconId(id:String,color:Color,size:Number);
		fromText(text:String,color:Color,size:Number);
		fromUrl(url:ResourceString,color:Color,size:Number);
	}
	class PixelFormat{
		constructor();
		ALPHA:  Number;
		DEPTH_COMPONENT:  Number;
		DEPTH_STENCIL:  Number;
		LUMINANCE:  Number;
		LUMINANCE_ALPHA:  Number;
		RGB:  Number;
		RGB_DXT1:  Number;
		RGB_ETC1:  Number;
		RGB_PVRTC_2BPPV1:  Number;
		RGB_PVRTC_4BPPV1:  Number;
		RGBA:  Number;
		RGBA_DXT1:  Number;
		RGBA_DXT3:  Number;
		RGBA_DXT5:  Number;
		RGBA_PVRTC_2BPPV1:  Number;
		RGBA_PVRTC_4BPPV1:  Number;

	}
	class Plane{
		constructor(normal:Cartesian3,distance:Number);
		ORIGIN_XY_PLANE:  Plane;
		ORIGIN_YZ_PLANE:  Plane;
		ORIGIN_ZX_PLANE:  Plane;
		distance:  Number;
		normal:  Cartesian3;
		clone(plane:Plane,result:Plane);
		equals(left:Plane,right:Plane);
		fromCartesian4(coefficients:Cartesian4,result:Plane);
		fromPointNormal(point:Cartesian3,normal:Cartesian3,result:Plane);
		getPointDistance(plane:Plane,point:Cartesian3);
		projectPointOntoPlane(plane:Plane,point:Cartesian3,result:Cartesian3);
		transform(plane:Plane,transform:Matrix4,result:Plane);
	}
	class PlaneGeometry{
		constructor(options:Object);
		packedLength:  Number;
		createGeometry(planeGeometry:PlaneGeometry);
		pack(value:PlaneGeometry,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:PlaneGeometry);
	}
	class PlaneGeometryUpdater{
		constructor(entity:Entity,scene:Scene);

		createFillGeometryInstance(time:JulianDate);
		createOutlineGeometryInstance(time:JulianDate);
	}
	class PlaneGraphics{
		constructor(options:Object);
		definitionChanged:  Event;
		dimensions:  Property;
		distanceDisplayCondition:  Property;
		fill:  Property;
		material:  MaterialProperty;
		outline:  Property;
		outlineColor:  Property;
		outlineWidth:  Property;
		plane:  Property;
		shadows:  Property;
		show:  Property;
		clone(result:PlaneGraphics);
		merge(source:PlaneGraphics);
	}
	class PlaneOutlineGeometry{
		constructor();
		packedLength:  Number;
		createGeometry();
		pack(value:PlaneOutlineGeometry,array:Array<Number>);
		unpack(array:Array<Number>,startingIndex:Number,result:PlaneOutlineGeometry);
	}
	class PointGraphics{
		constructor(options:Object);
		color:  Property;
		definitionChanged:  Event;
		disableDepthTestDistance:  Property;
		distanceDisplayCondition:  Property;
		heightReference:  Property;
		outlineColor:  Property;
		outlineWidth:  Property;
		pixelSize:  Property;
		scaleByDistance:  Property;
		show:  Property;
		translucencyByDistance:  Property;
		clone(result:PointGraphics);
		merge(source:PointGraphics);
	}
	class pointInsideTriangle{
		constructor(point:Cartesian2|Cartesian3,p0:Cartesian2|Cartesian3,p1:Cartesian2|Cartesian3,p2:Cartesian2|Cartesian3);


	}
	class PointPrimitive{
		constructor();
		color:  Color;
		disableDepthTestDistance:  Number;
		distanceDisplayCondition:  DistanceDisplayCondition;
		id:  Object;
		outlineColor:  Color;
		outlineWidth:  Number;
		pixelSize:  Number;
		position:  Cartesian3;
		scaleByDistance:  NearFarScalar;
		show:  Boolean;
		translucencyByDistance:  NearFarScalar;
		computeScreenSpacePosition(scene:Scene,result:Cartesian2);
		equals(other:PointPrimitive);
	}
	class PointPrimitiveCollection{
		constructor(options:Object);
		blendOption:  BlendOption;
		debugShowBoundingVolume:  Boolean;
		length:  Number;
		modelMatrix:  Matrix4;
		add(pointPrimitive:Object);
		contains(pointPrimitive:PointPrimitive);
		destroy();
		get(index:Number);
		isDestroyed();
		remove(pointPrimitive:PointPrimitive);
		removeAll();
	}
	class PointVisualizer{
		constructor(entityCluster:EntityCluster,entityCollection:EntityCollection);

		destroy();
		isDestroyed();
		update(time:JulianDate);
	}
	class PolygonGeometry{
		constructor(options:Object);
		packedLength:  Number;
		createGeometry(polygonGeometry:PolygonGeometry);
		fromPositions(options:Object,positions:Array<Cartesian3>,height:Number,extrudedHeight:Number,vertexFormat:VertexFormat,stRotation:Number,ellipsoid:Ellipsoid,granularity:Number,perPositionHeight:Boolean,closeTop:Boolean,closeBottom:Boolean);
		pack(value:PolygonGeometry,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:PolygonGeometry);
	}
	class PolygonGeometryUpdater{
		constructor(entity:Entity,scene:Scene);

		createFillGeometryInstance(time:JulianDate);
		createOutlineGeometryInstance(time:JulianDate);
	}
	class PolygonGraphics{
		constructor(options:Object);
		classificationType:  Property;
		closeBottom:  Property;
		closeTop:  Property;
		definitionChanged:  Event;
		distanceDisplayCondition:  Property;
		extrudedHeight:  Property;
		fill:  Property;
		granularity:  Property;
		height:  Property;
		hierarchy:  Property;
		material:  MaterialProperty;
		outline:  Property;
		outlineColor:  Property;
		outlineWidth:  Property;
		perPositionHeight:  Property;
		shadows:  Property;
		show:  Property;
		stRotation:  Property;
		clone(result:PolygonGraphics);
		merge(source:PolygonGraphics);
	}
	class PolygonHierarchy{
		constructor(positions:Array<Cartesian3>,holes:Array<PolygonHierarchy>);
		holes:  Array<PolygonHierarchy>;
		positions:  Array<Cartesian3>;

	}
	class PolygonOutlineGeometry{
		constructor(options:Object);
		packedLength:  Number;
		createGeometry(polygonGeometry:PolygonOutlineGeometry);
		fromPositions(options:Object,positions:Array<Cartesian3>,height:Number,extrudedHeight:Number,ellipsoid:Ellipsoid,granularity:Number,perPositionHeight:Boolean);
		pack(value:PolygonOutlineGeometry,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:PolygonOutlineGeometry);
	}
	class Polyline{
		constructor(options:Object,polylineCollection:PolylineCollection);
		distanceDisplayCondition:  DistanceDisplayCondition;
		id:  Object;
		loop:  Boolean;
		material:  Material;
		positions:  Array<Cartesian3>;
		show:  Boolean;
		width:  Number;

	}
	class PolylineArrowMaterialProperty{
		constructor(color:Property);
		color:  Property;
		definitionChanged:  Event;
		isConstant:  Boolean;
		equals(other:Property);
		getType(time:JulianDate);
		getValue(time:JulianDate,result:Object);
	}
	class PolylineCollection{
		constructor(options:Object);
		debugShowBoundingVolume:  Boolean;
		length:  Number;
		modelMatrix:  Matrix4;
		add(polyline:Object);
		contains(polyline:Polyline);
		destroy();
		get(index:Number);
		isDestroyed();
		remove(polyline:Polyline);
		removeAll();
		update();
	}
	class PolylineColorAppearance{
		constructor(options:Object);
		VERTEX_FORMAT:  VertexFormat;
		closed:  Boolean;
		fragmentShaderSource:  String;
		material:  Material;
		renderState:  Object;
		translucent:  Boolean;
		vertexFormat:  VertexFormat;
		vertexShaderSource:  String;
		getFragmentShaderSource();
		getRenderState();
		isTranslucent();
	}
	class PolylineDashMaterialProperty{
		constructor(options:Object);
		color:  Property;
		dashLength:  Property;
		dashPattern:  Property;
		definitionChanged:  Event;
		gapColor:  Property;
		isConstant:  Boolean;
		equals(other:Property);
		getType(time:JulianDate);
		getValue(time:JulianDate,result:Object);
	}
	class PolylineGeometry{
		constructor(options:Object);
		packedLength:  Number;
		createGeometry(polylineGeometry:PolylineGeometry);
		pack(value:PolylineGeometry,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:PolylineGeometry);
	}
	class PolylineGeometryUpdater{
		constructor(entity:Entity,scene:Scene);
		depthFailMaterialProperty:  MaterialProperty;
		distanceDisplayConditionProperty:  Property;
		entity:  Entity;
		fillEnabled:  Boolean;
		fillMaterialProperty:  MaterialProperty;
		geometryChanged:  Boolean;
		hasConstantFill:  Boolean;
		hasConstantOutline:  Boolean;
		id:  String;
		isClosed:  Boolean;
		isDynamic:  Boolean;
		outlineColorProperty:  Property;
		outlineEnabled:  Boolean;
		shadowsProperty:  Property;
		createDynamicUpdater(primitives:PrimitiveCollection);
		createFillGeometryInstance(time:JulianDate);
		createOutlineGeometryInstance(time:JulianDate);
		destroy();
		isDestroyed();
		isFilled(time:JulianDate);
		isOutlineVisible(time:JulianDate);
	}
	class PolylineGlowMaterialProperty{
		constructor(options:Object);
		color:  Property;
		definitionChanged:  Event;
		glowPower:  Property;
		isConstant:  Boolean;
		equals(other:Property);
		getType(time:JulianDate);
		getValue(time:JulianDate,result:Object);
	}
	class PolylineGraphics{
		constructor(options:Object);
		definitionChanged:  Event;
		depthFailMaterial:  MaterialProperty;
		distanceDisplayCondition:  Property;
		followSurface:  Property;
		granularity:  Property;
		material:  MaterialProperty;
		positions:  Property;
		shadows:  Property;
		show:  Property;
		width:  Property;
		clone(result:PolylineGraphics);
		merge(source:PolylineGraphics);
	}
	class PolylineMaterialAppearance{
		constructor(options:Object);
		VERTEX_FORMAT:  VertexFormat;
		closed:  Boolean;
		fragmentShaderSource:  String;
		material:  Material;
		renderState:  Object;
		translucent:  Boolean;
		vertexFormat:  VertexFormat;
		vertexShaderSource:  String;
		getFragmentShaderSource();
		getRenderState();
		isTranslucent();
	}
	class PolylineOutlineMaterialProperty{
		constructor(options:Object);
		color:  Property;
		definitionChanged:  Event;
		isConstant:  Boolean;
		outlineColor:  Property;
		outlineWidth:  Property;
		equals(other:Property);
		getType(time:JulianDate);
		getValue(time:JulianDate,result:Object);
	}
	class PolylineVisualizer{
		constructor(scene:Scene,entityCollection:EntityCollection);

		destroy();
		isDestroyed();
		update(time:JulianDate);
	}
	class PolylineVolumeGeometry{
		constructor(options:Object);
		packedLength:  Number;
		createGeometry(polylineVolumeGeometry:PolylineVolumeGeometry);
		pack(value:PolylineVolumeGeometry,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:PolylineVolumeGeometry);
	}
	class PolylineVolumeGeometryUpdater{
		constructor(entity:Entity,scene:Scene);

		createFillGeometryInstance(time:JulianDate);
		createOutlineGeometryInstance(time:JulianDate);
	}
	class PolylineVolumeGraphics{
		constructor(options:Object);
		cornerType:  Property;
		definitionChanged:  Event;
		distanceDisplayCondition:  Property;
		fill:  Property;
		granularity:  Property;
		material:  MaterialProperty;
		outline:  Property;
		outlineColor:  Property;
		outlineWidth:  Property;
		positions:  Property;
		shadows:  Property;
		shape:  Property;
		show:  Property;
		clone(result:PolylineVolumeGraphics);
		merge(source:PolylineVolumeGraphics);
	}
	class PolylineVolumeOutlineGeometry{
		constructor(options:Object);
		packedLength:  Number;
		createGeometry(polylineVolumeOutlineGeometry:PolylineVolumeOutlineGeometry);
		pack(value:PolylineVolumeOutlineGeometry,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:PolylineVolumeOutlineGeometry);
	}
	class PositionProperty{
		constructor();
		definitionChanged:  Event;
		isConstant:  Boolean;
		referenceFrame:  ReferenceFrame;
		equals(other:Property);
		getValue(time:JulianDate,result:Cartesian3);
		getValueInReferenceFrame(time:JulianDate,referenceFrame:ReferenceFrame,result:Cartesian3);
	}
	class PositionPropertyArray{
		constructor(value:Array<Property>,referenceFrame:ReferenceFrame);
		definitionChanged:  Event;
		isConstant:  Boolean;
		referenceFrame:  ReferenceFrame;
		equals(other:Property);
		getValue(time:JulianDate,result:Array<Cartesian3>);
		getValueInReferenceFrame(time:JulianDate,referenceFrame:ReferenceFrame,result:Cartesian3);
		setValue(value:Array<Property>);
	}
	class Primitive{
		constructor(options:Object);
		allowPicking:  Boolean;
		appearance:  Appearance;
		asynchronous:  Boolean;
		compressVertices:  Boolean;
		cull:  Boolean;
		debugShowBoundingVolume:  Boolean;
		depthFailAppearance:  Appearance;
		geometryInstances:  Array<GeometryInstance>|GeometryInstance;
		interleave:  Boolean;
		modelMatrix:  Matrix4;
		ready:  Boolean;
		readyPromise:  Promise<Primitive>;
		releaseGeometryInstances:  Boolean;
		shadows:  ShadowMode;
		show:  Boolean;
		vertexCacheOptimize:  Boolean;
		destroy();
		getGeometryInstanceAttributes(id:Object);
		isDestroyed();
		update();
	}
	class PrimitiveCollection{
		constructor(options:Object);
		destroyPrimitives:  Boolean;
		length:  Number;
		show:  Boolean;
		add(primitive:Object);
		contains(primitive:Object);
		destroy();
		get(index:Number);
		isDestroyed();
		lower(primitive:Object);
		lowerToBottom(primitive:Object);
		raise(primitive:Object);
		raiseToTop(primitive:Object);
		remove(primitive:Object);
		removeAll();
	}
	class PrimitiveType{
		constructor();
		LINE_LOOP:  Number;
		LINE_STRIP:  Number;
		LINES:  Number;
		POINTS:  Number;
		TRIANGLE_FAN:  Number;
		TRIANGLE_STRIP:  Number;
		TRIANGLES:  Number;

	}
	class ProjectionPicker{
		constructor(container:Element|String,scene:Scene);
		container:  Element;
		viewModel:  ProjectionPickerViewModel;
		destroy();
		isDestroyed();
	}
	class ProjectionPickerViewModel{
		constructor(scene:Scene);
		dropDownVisible:  Boolean;
		isOrthographicProjection:  Command;
		scene:  Scene;
		sceneMode:  SceneMode;
		selectedTooltip:  String;
		switchToOrthographic:  Command;
		switchToPerspective:  Command;
		toggleDropDown:  Command;
		tooltipOrthographic:  String;
		tooltipPerspective:  String;
		destroy();
		isDestroyed();
	}
	class Property{
		constructor();
		definitionChanged:  Event;
		isConstant:  Boolean;
		equals(other:Property);
		getValue(time:JulianDate,result:Object);
	}
	class PropertyArray{
		constructor(value:Array<Property>);
		definitionChanged:  Event;
		isConstant:  Boolean;
		equals(other:Property);
		getValue(time:JulianDate,result:Array<Object>);
		setValue(value:Array<Property>);
	}
	class PropertyBag{
		constructor(value:Object,createPropertyCallback/*:function*/);
		definitionChanged:  Event;
		isConstant:  Boolean;
		propertyNames/*:  Array;*/
		addProperty(propertyName:String,value:any,createPropertyCallback/*:function*/);
		equals(other:Property);
		getValue(time:JulianDate,result:Object);
		hasProperty(propertyName:String);
		merge(source:Object,createPropertyCallback/*:function*/);
		removeProperty(propertyName:String);
	}
	class ProviderViewModel{
		constructor(options:Object);
		creationCommand:  Command;
		iconUrl:  String;
		name:  String;
		tooltip:  String;

	}
	class QuadraticRealPolynomial{
		constructor();

		computeDiscriminant(a:Number,b:Number,c:Number);
		computeRealRoots(a:Number,b:Number,c:Number);
	}
	class QuantizedMeshTerrainData{
		constructor(options:Object);
		credits:  Array<Credit>;
		waterMask:  Uint8Array|Image|Canvas;
		interpolateHeight(rectangle:Rectangle,longitude:Number,latitude:Number);
		isChildAvailable(thisX:Number,thisY:Number,childX:Number,childY:Number);
		upsample(tilingScheme:TilingScheme,thisX:Number,thisY:Number,thisLevel:Number,descendantX:Number,descendantY:Number,descendantLevel:Number);
		wasCreatedByUpsampling();
	}
	class QuarticRealPolynomial{
		constructor();

		computeDiscriminant(a:Number,b:Number,c:Number,d:Number,e:Number);
		computeRealRoots(a:Number,b:Number,c:Number,d:Number,e:Number);
	}
	class Quaternion{
		constructor(x:Number,y:Number,z:Number,w:Number);
		IDENTITY:  Quaternion;
		packedInterpolationLength:  Number;
		packedLength:  Number;
		ZERO:  Quaternion;
		w:  Number;
		x:  Number;
		y:  Number;
		z:  Number;
		add(left:Quaternion,right:Quaternion,result:Quaternion);
		clone(quaternion:Quaternion,result:Quaternion);
		computeAngle(quaternion:Quaternion);
		computeAxis(quaternion:Quaternion,result:Cartesian3);
		computeInnerQuadrangle(q0:Quaternion,q1:Quaternion,q2:Quaternion,result:Quaternion);
		conjugate(quaternion:Quaternion,result:Quaternion);
		convertPackedArrayForInterpolation(packedArray:Array<Number>,startingIndex:Number,lastIndex:Number,result:Array<Number>);
		divideByScalar(quaternion:Quaternion,scalar:Number,result:Quaternion);
		dot(left:Quaternion,right:Quaternion);
		equals(left:Quaternion,right:Quaternion);
		equalsEpsilon(left:Quaternion,right:Quaternion,epsilon:Number);
		exp(cartesian:Cartesian3,result:Quaternion);
		fastSlerp(start:Quaternion,end:Quaternion,t:Number,result:Quaternion);
		fastSquad(q0:Quaternion,q1:Quaternion,s0:Quaternion,s1:Quaternion,t:Number,result:Quaternion);
		fromAxisAngle(axis:Cartesian3,angle:Number,result:Quaternion);
		fromHeadingPitchRoll(headingPitchRoll:HeadingPitchRoll,result:Quaternion);
		fromRotationMatrix(matrix:Matrix3,result:Quaternion);
		inverse(quaternion:Quaternion,result:Quaternion);
		lerp(start:Quaternion,end:Quaternion,t:Number,result:Quaternion);
		log(quaternion:Quaternion,result:Cartesian3);
		magnitude(quaternion:Quaternion);
		magnitudeSquared(quaternion:Quaternion);
		multiply(left:Quaternion,right:Quaternion,result:Quaternion);
		multiplyByScalar(quaternion:Quaternion,scalar:Number,result:Quaternion);
		negate(quaternion:Quaternion,result:Quaternion);
		normalize(quaternion:Quaternion,result:Quaternion);
		pack(value:Quaternion,array:Array<Number>,startingIndex:Number);
		slerp(start:Quaternion,end:Quaternion,t:Number,result:Quaternion);
		squad(q0:Quaternion,q1:Quaternion,s0:Quaternion,s1:Quaternion,t:Number,result:Quaternion);
		subtract(left:Quaternion,right:Quaternion,result:Quaternion);
		unpack(array:Array<Number>,startingIndex:Number,result:Quaternion);
		unpackInterpolationResult(array:Array<Number>,sourceArray:Array<Number>,firstIndex:Number,lastIndex:Number,result:Quaternion);
		clone(result:Quaternion);
		equals(right:Quaternion);
		equalsEpsilon(right:Quaternion,epsilon:Number);
		toString();
	}
	class QuaternionSpline{
		constructor(options:Object);
		points:  Array<Quaternion>;
		times:  Array<Number>;
		clampTime(time:Number);
		evaluate(time:Number,result:Quaternion);
		findTimeInterval(time:Number);
		wrapTime(time:Number);
	}
	class queryToObject{
		constructor(queryString:String);


	}
	class Queue{
		constructor();
		length:  Number;
		clear();
		contains(item:Object);
		dequeue();
		enqueue(item:Object);
		peek();
		sort(compareFunction:Queue_Comparator);
	}
	class Queue_Comparator{}
	class Ray{
		constructor(origin:Cartesian3,direction:Cartesian3);
		direction:  Cartesian3;
		origin:  Cartesian3;
		getPoint(ray:Ray,t:Number,result:Cartesian3);
	}
	class Rectangle{
		constructor(west:Number,south:Number,east:Number,north:Number);
		MAX_VALUE:  Rectangle;
		packedLength:  Number;
		east:  Number;
		height:  Number;
		north:  Number;
		south:  Number;
		west:  Number;
		width:  Number;
		center(rectangle:Rectangle,result:Cartographic);
		clone(rectangle:Rectangle,result:Rectangle);
		computeHeight(rectangle:Rectangle);
		computeWidth(rectangle:Rectangle);
		contains(rectangle:Rectangle,cartographic:Cartographic);
		equals(left:Rectangle,right:Rectangle);
		expand(rectangle:Rectangle,cartographic:Cartographic,result:Rectangle);
		fromCartesianArray(cartesians:Array<Cartesian3>,ellipsoid:Ellipsoid,result:Rectangle);
		fromCartographicArray(cartographics:Array<Cartographic>,result:Rectangle);
		fromDegrees(west:Number,south:Number,east:Number,north:Number,result:Rectangle);
		fromRadians(west:Number,south:Number,east:Number,north:Number,result:Rectangle);
		intersection(rectangle:Rectangle,otherRectangle:Rectangle,result:Rectangle);
		northeast(rectangle:Rectangle,result:Cartographic);
		northwest(rectangle:Rectangle,result:Cartographic);
		pack(value:Rectangle,array:Array<Number>,startingIndex:Number);
		simpleIntersection(rectangle:Rectangle,otherRectangle:Rectangle,result:Rectangle);
		southeast(rectangle:Rectangle,result:Cartographic);
		southwest(rectangle:Rectangle,result:Cartographic);
		subsample(rectangle:Rectangle,ellipsoid:Ellipsoid,surfaceHeight:Number,result:Array<Cartesian3>);
		union(rectangle:Rectangle,otherRectangle:Rectangle,result:Rectangle);
		unpack(array:Array<Number>,startingIndex:Number,result:Rectangle);
		validate(rectangle:Rectangle);
		clone(result:Rectangle);
		equals(other:Rectangle);
		equalsEpsilon(other:Rectangle,epsilon:Number);
	}
	class RectangleGeometry{
		constructor(options:Object);
		packedLength:  Number;
		createGeometry(rectangleGeometry:RectangleGeometry);
		pack(value:RectangleGeometry,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:RectangleGeometry);
	}
	class RectangleGeometryUpdater{
		constructor(entity:Entity,scene:Scene);

		createFillGeometryInstance(time:JulianDate);
		createOutlineGeometryInstance(time:JulianDate);
	}
	class RectangleGraphics{
		constructor(options:Object);
		classificationType:  Property;
		coordinates:  Property;
		definitionChanged:  Event;
		distanceDisplayCondition:  Property;
		extrudedHeight:  Property;
		fill:  Property;
		granularity:  Property;
		height:  Property;
		material:  MaterialProperty;
		outline:  Property;
		outlineColor:  Property;
		outlineWidth:  Property;
		rotation:  Property;
		shadows:  Property;
		show:  Property;
		stRotation:  Property;
		clone(result:RectangleGraphics);
		merge(source:RectangleGraphics);
	}
	class RectangleOutlineGeometry{
		constructor(options:Object);
		packedLength:  Number;
		createGeometry(rectangleGeometry:RectangleOutlineGeometry);
		pack(value:RectangleOutlineGeometry,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:RectangleOutlineGeometry);
	}
	class ReferenceFrame{
		constructor();
		FIXED:  Number;
		INERTIAL:  Number;

	}
	class ReferenceProperty{
		constructor(targetCollection:EntityCollection,targetId:String,targetPropertyNames:Array<String>);
		definitionChanged:  Event;
		isConstant:  Boolean;
		referenceFrame:  ReferenceFrame;
		resolvedProperty:  Property;
		targetCollection:  EntityCollection;
		targetId:  String;
		targetPropertyNames:  Array<String>;
		fromString(targetCollection:EntityCollection,referenceString:String);
		equals(other:Property);
		getType(time:JulianDate);
		getValue(time:JulianDate,result:Object);
		getValueInReferenceFrame(time:JulianDate,referenceFrame:ReferenceFrame,result:Cartesian3);
	}
	class Request_CancelCallback{}
	class Request_PriorityCallback{}
	class Request_RequestCallback{}
	
	class Request{
		constructor(options:Object);
		cancelFunction:  Request_CancelCallback;
		priority:  Number;
		priorityFunction:  Request_PriorityCallback;
		requestFunction:  Request_RequestCallback;
		state:  RequestState;
		throttle:  Boolean;
		throttleByServer:  Boolean;
		type:  RequestType;
		url:  String;
		clone(result:Request);
	}
	class requestAnimationFrame{
		constructor(callback:requestAnimationFrame);//_Callback);
	}
	class RequestErrorEvent{
		constructor(statusCode:Number,response:Object,responseHeaders:String|Object);
		response:  Object;
		responseHeaders:  Object;
		statusCode:  Number;
		toString();
	}
	class RequestState{
		constructor();
		ACTIVE:  Number;
		CANCELLED:  Number;
		FAILED:  Number;
		ISSUED:  Number;
		RECEIVED:  Number;
		UNISSUED:  Number;

	}
	class RequestType{
		constructor();
		IMAGERY:  Number;
		OTHER:  Number;
		TERRAIN:  Number;
		TILES3D:  Number;

	}
	class StringObject{}
	class Resource{
		constructor(options:String|Object);
		DEFAULT:  Resource;
		isBlobSupported:  Boolean;
		extension:  String;
		hasHeaders:  Boolean;
		headers:  Object;
		isBlobUri:  Boolean;
		isCrossOriginUrl:  Boolean;
		isDataUri:  Boolean;
		proxy:  DefaultProxy;
		queryParameters:  Object;
		request:  Request;
		retryAttempts:  Number;
		retryCallback;//:  function;
		templateValues:  Object;
		url:  String;
		delete(options:StringObject,url:String,queryParameters:Object,templateValues:Object,headers:Object,proxy:DefaultProxy,retryCallback:Resource_RetryCallback,retryAttempts:Number,request:Request,responseType:String,overrideMimeType:String);
		fetch(options:StringObject,url:String,queryParameters:Object,templateValues:Object,headers:Object,proxy:DefaultProxy,retryCallback:Resource_RetryCallback,retryAttempts:Number,request:Request,responseType:String,overrideMimeType:String);
		fetchArrayBuffer(options:StringObject,url:String,queryParameters:Object,templateValues:Object,headers:Object,proxy:DefaultProxy,retryCallback:Resource_RetryCallback,retryAttempts:Number,request:Request);
		fetchBlob(options:StringObject,url:String,queryParameters:Object,templateValues:Object,headers:Object,proxy:DefaultProxy,retryCallback:Resource_RetryCallback,retryAttempts:Number,request:Request);
		fetchImage(options:StringObject,url:String,queryParameters:Object,templateValues:Object,headers:Object,proxy:DefaultProxy,retryCallback:Resource_RetryCallback,retryAttempts:Number,request:Request,preferBlob:Boolean);
		fetchJson(options:StringObject,url:String,queryParameters:Object,templateValues:Object,headers:Object,proxy:DefaultProxy,retryCallback:Resource_RetryCallback,retryAttempts:Number,request:Request);
		fetchJsonp(options:StringObject,url:String,queryParameters:Object,templateValues:Object,headers:Object,proxy:DefaultProxy,retryCallback:Resource_RetryCallback,retryAttempts:Number,request:Request,callbackParameterName:String);
		fetchText(options:StringObject,url:String,queryParameters:Object,templateValues:Object,headers:Object,proxy:DefaultProxy,retryCallback:Resource_RetryCallback,retryAttempts:Number,request:Request);
		fetchXML(options:StringObject,url:String,queryParameters:Object,templateValues:Object,headers:Object,proxy:DefaultProxy,retryCallback:Resource_RetryCallback,retryAttempts:Number,request:Request);
		head(options:StringObject,url:String,queryParameters:Object,templateValues:Object,headers:Object,proxy:DefaultProxy,retryCallback:Resource_RetryCallback,retryAttempts:Number,request:Request,responseType:String,overrideMimeType:String);
		options(options:StringObject,url:String,queryParameters:Object,templateValues:Object,headers:Object,proxy:DefaultProxy,retryCallback:Resource_RetryCallback,retryAttempts:Number,request:Request,responseType:String,overrideMimeType:String);
		patch(options:Object,url:String,data:Object,queryParameters:Object,templateValues:Object,headers:Object,proxy:DefaultProxy,retryCallback:Resource_RetryCallback,retryAttempts:Number,request:Request,responseType:String,overrideMimeType:String);
		post(options:Object,url:String,data:Object,queryParameters:Object,templateValues:Object,headers:Object,proxy:DefaultProxy,retryCallback:Resource_RetryCallback,retryAttempts:Number,request:Request,responseType:String,overrideMimeType:String);
		put(options:Object,url:String,data:Object,queryParameters:Object,templateValues:Object,headers:Object,proxy:DefaultProxy,retryCallback:Resource_RetryCallback,retryAttempts:Number,request:Request,responseType:String,overrideMimeType:String);
		addQueryParameters(params:Object,useAsDefault:Boolean);
		addTemplateValues(template:Object,useAsDefault:Boolean);
		appendForwardSlash();
		appendQueryParameters(params:Object);
		clone(result:Resource);
		delete(options:Object,responseType:String,headers:Object,overrideMimeType:String);
		fetch(options:Object,responseType:String,headers:Object,overrideMimeType:String);
		fetchArrayBuffer();
		fetchBlob();
		fetchImage(preferBlob:Boolean);
		fetchJson();
		fetchJsonp(callbackParameterName:String);
		fetchText();
		fetchXML();
		getBaseUri(includeQuery:Boolean);
		getDerivedResource(options:Object,url:String,queryParameters:Object,templateValues:Object,headers:Object,proxy:DefaultProxy,retryCallback:Resource_RetryCallback,retryAttempts:Number,request:Request,preserveQueryParameters:Boolean);
		getUrlComponent(query:Boolean,proxy:Boolean);
		head(options:Object,responseType:String,headers:Object,overrideMimeType:String);
		options(options:Object,responseType:String,headers:Object,overrideMimeType:String);
		patch(data:Object,options:Object,responseType:String,headers:Object,overrideMimeType:String);
		post(data:Object,options:Object,responseType:String,headers:Object,overrideMimeType:String);
		put(data:Object,options:Object,responseType:String,headers:Object,overrideMimeType:String);
		setQueryParameters(params:Object,useAsDefault:Boolean);
		setTemplateValues(template:Object,useAsDefault:Boolean);
	}
	class Rotation{
		constructor();
		packedLength:  Number;
		convertPackedArrayForInterpolation(packedArray:Array<Number>,startingIndex:Number,lastIndex:Number,result:Array<Number>);
		pack(value:Rotation,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:Rotation);
		unpackInterpolationResult(array:Array<Number>,sourceArray:Array<Number>,firstIndex:Number,lastIndex:Number,result:Rotation);
	}
	class RuntimeError{
		constructor(message:String);
		message:  String;
		name:  String;
		stack:  String;

	}
	class SampledPositionProperty{
		constructor(referenceFrame:ReferenceFrame,numberOfDerivatives:Number);
		backwardExtrapolationDuration:  Number;
		backwardExtrapolationType:  ExtrapolationType;
		definitionChanged:  Event;
		forwardExtrapolationDuration:  Number;
		forwardExtrapolationType:  ExtrapolationType;
		interpolationAlgorithm:  InterpolationAlgorithm;
		interpolationDegree:  Number;
		isConstant:  Boolean;
		numberOfDerivatives:  Boolean;
		referenceFrame:  ReferenceFrame;
		addSample(time:JulianDate,position:Cartesian3,derivatives:Array<Cartesian3>);
		addSamples(times:Array<JulianDate>,positions:Array<Cartesian3>,derivatives/*:Array<Array>*/);
		addSamplesPackedArray(packedSamples:Array<Number>,epoch:JulianDate);
		equals(other:Property);
		getValue(time:JulianDate,result:Cartesian3);
		getValueInReferenceFrame(time:JulianDate,referenceFrame:ReferenceFrame,result:Cartesian3);
		setInterpolationOptions(options:Object,interpolationAlgorithm:InterpolationAlgorithm,interpolationDegree:Number);
	}
	class SampledProperty{
		constructor(type:Number|Packable,derivativeTypes:Array<Packable>);
		backwardExtrapolationDuration:  Number;
		backwardExtrapolationType:  ExtrapolationType;
		definitionChanged:  Event;
		derivativeTypes:  Array<Packable>;
		forwardExtrapolationDuration:  Number;
		forwardExtrapolationType:  ExtrapolationType;
		interpolationAlgorithm:  InterpolationAlgorithm;
		interpolationDegree:  Number;
		isConstant:  Boolean;
		type:  Object;
		addSample(time:JulianDate,value:Packable,derivatives:Array<Packable>);
		addSamples(times:Array<JulianDate>,values:Array<Packable>,derivativeValues/*:Array<Array>*/);
		addSamplesPackedArray(packedSamples:Array<Number>,epoch:JulianDate);
		equals(other:Property);
		getValue(time:JulianDate,result:Object);
		setInterpolationOptions(options:Object,interpolationAlgorithm:InterpolationAlgorithm,interpolationDegree:Number);
	}
	class sampleTerrain{
		constructor(terrainProvider:TerrainProvider,level:Number,positions:Array<Cartographic>);


	}
	class sampleTerrainMostDetailed{
		constructor(terrainProvider:TerrainProvider,positions:Array<Cartographic>);


	}
	class Scene{
		constructor(options:Object);
		backgroundColor:  Color;
		camera:  Camera;
		canvas:  Canvas;
		completeMorphOnUserInput:  Boolean;
		debugCommandFilter;//:  function;
		debugFrustumStatistics:  Object;
		debugShowCommands:  Boolean;
		debugShowDepthFrustum:  Number;
		debugShowFramesPerSecond:  Boolean;
		debugShowFrustumPlanes:  Boolean;
		debugShowFrustums:  Boolean;
		debugShowGlobeDepth:  Boolean;
		drawingBufferHeight:  Number;
		drawingBufferWidth:  Number;
		eyeSeparation:  Number;
		farToNearRatio:  Number;
		focalLength:  Number;
		fog:  Fog;
		fxaa:  Boolean;
		globe:  Globe;
		groundPrimitives:  PrimitiveCollection;
		id:  String;
		imageryLayers:  ImageryLayerCollection;
		imagerySplitPosition:  Number;
		invertClassification:  Boolean;
		invertClassificationColor:  Color;
		lastRenderTime:  JulianDate;
		mapMode2D:  Boolean;
		mapProjection:  MapProjection;
		maximumAliasedLineWidth:  Number;
		maximumCubeMapSize:  Number;
		maximumRenderTimeChange:  Number;
		minimumDisableDepthTestDistance:  Number;
		mode:  SceneMode;
		moon:  Moon;
		morphComplete:  Event;
		morphStart:  Event;
		morphTime:  Number;
		nearToFarDistance2D:  Number;
		orderIndependentTranslucency:  Boolean;
		pickPositionSupported:  Boolean;
		pickTranslucentDepth:  Boolean;
		postRender:  Event;
		postUpdate:  Event;
		preRender:  Event;
		preUpdate:  Event;
		primitives:  PrimitiveCollection;
		renderError:  Event;
		requestRenderMode:  Boolean;
		rethrowRenderErrors:  Boolean;
		scene3DOnly:  Boolean;
		screenSpaceCameraController:  ScreenSpaceCameraController;
		shadowMap:  ShadowMap;
		skyAtmosphere:  SkyAtmosphere;
		skyBox:  SkyBox;
		sun:  Sun;
		sunBloom:  Boolean;
		terrainExaggeration:  Number;
		terrainProvider:  TerrainProvider;
		terrainProviderChanged:  Event;
		useDepthPicking:  Boolean;
		useWebVR:  Boolean;
		cartesianToCanvasCoordinates(position:Cartesian3,result:Cartesian2);
		completeMorph();
		destroy();
		drillPick(windowPosition:Cartesian2,limit:Number);
		getCompressedTextureFormatSupported(format:String);
		isDestroyed();
		morphTo2D(duration:Number);
		morphTo3D(duration:Number);
		morphToColumbusView(duration:Number);
		pick(windowPosition:Cartesian2,width:Number,height:Number);
		pickPosition(windowPosition:Cartesian2,result:Cartesian3);
		requestRender();
	}
	class SceneMode{
		constructor();
		COLUMBUS_VIEW:  Number;
		MORPHING:  Number;
		SCENE2D:  Number;
		SCENE3D:  Number;
		getMorphTime(value:SceneMode);
	}
	class SceneModePicker{
		constructor(container:Element|String,scene:Scene,duration:Number);
		container:  Element;
		viewModel:  SceneModePickerViewModel;
		destroy();
		isDestroyed();
	}
	class SceneModePickerViewModel{
		constructor(scene:Scene,duration:Number);
		dropDownVisible:  Boolean;
		duration:  Number;
		morphTo2D:  Command;
		morphTo3D:  Command;
		morphToColumbusView:  Command;
		scene:  Scene;
		sceneMode:  SceneMode;
		selectedTooltip:  String;
		toggleDropDown:  Command;
		tooltip2D:  String;
		tooltip3D:  String;
		tooltipColumbusView:  String;
		destroy();
		isDestroyed();
	}
	class SceneTransforms{
		constructor();

		wgs84ToDrawingBufferCoordinates(scene:Scene,position:Cartesian3,result:Cartesian2);
		wgs84ToWindowCoordinates(scene:Scene,position:Cartesian3,result:Cartesian2);
	}
	class ScreenSpaceCameraController{
		constructor(scene:Scene);
		bounceAnimationTime:  Number;
		enableCollisionDetection:  Boolean;
		enableInputs:  Boolean;
		enableLook:  Boolean;
		enableRotate:  Boolean;
		enableTilt:  Boolean;
		enableTranslate:  Boolean;
		enableZoom:  Boolean;
		inertiaSpin:  Number;
		inertiaTranslate:  Number;
		inertiaZoom:  Number;
		lookEventTypes:  CameraEventType|/*Array|*/undefined;
		maximumMovementRatio:  Number;
		maximumZoomDistance:  Number;
		minimumCollisionTerrainHeight:  Number;
		minimumPickingTerrainHeight:  Number;
		minimumTrackBallHeight:  Number;
		minimumZoomDistance:  Number;
		rotateEventTypes:  CameraEventType|/*Array|*/undefined;
		tiltEventTypes:  CameraEventType|/*Array|*/undefined;
		translateEventTypes:  CameraEventType|/*Array|*/undefined;
		zoomEventTypes:  CameraEventType|/*Array|*/undefined;
		destroy();
		isDestroyed();
	}
	class ScreenSpaceEventHandler{
		constructor(element:Canvas);
		mouseEmulationIgnoreMilliseconds:  Number;
		destroy();
		getInputAction(type:Number,modifier:Number);
		isDestroyed();
		removeInputAction(type:Number,modifier:Number);
		setInputAction(action/*:function*/,type:Number,modifier:Number);
	}
	class ScreenSpaceEventType{
		constructor();
		LEFT_CLICK:  Number;
		LEFT_DOUBLE_CLICK:  Number;
		LEFT_DOWN:  Number;
		LEFT_UP:  Number;
		MIDDLE_CLICK:  Number;
		MIDDLE_DOWN:  Number;
		MIDDLE_UP:  Number;
		MOUSE_MOVE:  Number;
		PINCH_END:  Number;
		PINCH_MOVE:  Number;
		PINCH_START:  Number;
		RIGHT_CLICK:  Number;
		RIGHT_DOWN:  Number;
		RIGHT_UP:  Number;
		WHEEL:  Number;

	}
	class SelectionIndicator{
		constructor(container:Element|String,scene:Scene);
		container:  Element;
		viewModel:  SelectionIndicatorViewModel;
		destroy();
		isDestroyed();
	}
	class SelectionIndicatorViewModel_ComputeScreenSpacePosition{}
	class SelectionIndicatorViewModel{
		constructor(scene:Scene,selectionIndicatorElement:Element,container:Element);
		computeScreenSpacePosition:  SelectionIndicatorViewModel_ComputeScreenSpacePosition;
		container:  Element;
		isVisible:  Boolean;
		position:  Cartesian3;
		scene:  Scene;
		selectionIndicatorElement:  Element;
		showSelection:  Boolean;
		animateAppear();
		animateDepart();
		update();
	}
	class ShadowMap{
		constructor(options:Object);
		darkness:  Number;
		enabled:  Boolean;
		maximumDistance:  Number;
		normalOffset:  Boolean;
		size:  Number;
		softShadows:  Boolean;

	}
	class ShadowMode{
		constructor();
		CAST_ONLY:  Number;
		DISABLED:  Number;
		ENABLED:  Number;
		RECEIVE_ONLY:  Number;

	}
	class ShowGeometryInstanceAttribute{
		constructor(show:Boolean);
		componentDatatype:  ComponentDatatype;
		componentsPerAttribute:  Number;
		normalize:  Boolean;
		value:  Uint8Array;
		toValue(show:Boolean,result:Uint8Array);
	}
	class Simon1994PlanetaryPositions{
		constructor();

		computeMoonPositionInEarthInertialFrame(julianDate:JulianDate,result:Cartesian3);
		computeSunPositionInEarthInertialFrame(julianDate:JulianDate,result:Cartesian3);
	}
	class SimplePolylineGeometry{
		constructor(options:Object);
		packedLength:  Number;
		createGeometry(simplePolylineGeometry:SimplePolylineGeometry);
		pack(value:SimplePolylineGeometry,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:SimplePolylineGeometry);
	}
	class SingleTileImageryProvider{
		constructor(options:Object);
		credit:  Credit;
		errorEvent:  Event;
		hasAlphaChannel:  Boolean;
		maximumLevel:  Number;
		minimumLevel:  Number;
		proxy:  Proxy;
		ready:  Boolean;
		readyPromise:  Promise<Boolean>;
		rectangle:  Rectangle;
		tileDiscardPolicy:  TileDiscardPolicy;
		tileHeight:  Number;
		tileWidth:  Number;
		tilingScheme:  TilingScheme;
		url:  String;
		getTileCredits(x:Number,y:Number,level:Number);
		pickFeatures(x:Number,y:Number,level:Number,longitude:Number,latitude:Number);
		requestImage(x:Number,y:Number,level:Number,request:Request);
	}
	class SkyAtmosphere{
		constructor(ellipsoid:Ellipsoid);
		brightnessShift:  Number;
		ellipsoid:  Ellipsoid;
		hueShift:  Number;
		saturationShift:  Number;
		show:  Boolean;
		destroy();
		isDestroyed();
	}
	class SkyBox{
		constructor(options:Object);
		show:  Boolean;
		sources:  Object;
		destroy();
		isDestroyed();
		update();
	}
	class SphereEmitter{
		constructor(radius:Number);
		radius:  Number;

	}
	class SphereGeometry{
		constructor(options:Object);
		packedLength:  Number;
		createGeometry(sphereGeometry:SphereGeometry);
		pack(value:SphereGeometry,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:SphereGeometry);
	}
	class SphereOutlineGeometry{
		constructor(options:Object);
		packedLength:  Number;
		createGeometry(sphereGeometry:SphereOutlineGeometry);
		pack(value:SphereOutlineGeometry,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:SphereOutlineGeometry);
	}
	class Spherical{
		constructor(clock:Number,cone:Number,magnitude:Number);

		clone(spherical:Spherical,result:Spherical);
		equals(left:Spherical,right:Spherical);
		equalsEpsilon(left:Spherical,right:Spherical,epsilon:Number);
		fromCartesian3(cartesian3:Cartesian3,result:Spherical);
		normalize(spherical:Spherical,result:Spherical);
		clone(result:Spherical);
		equals(other:Spherical);
		equalsEpsilon(other:Spherical,epsilon:Number);
		toString();
	}
	class Spline{
		constructor();
		points:  Array<Cartesian3>|Array<Quaternion>;
		times:  Array<Number>;
		clampTime(time:Number);
		evaluate(time:Number,result:Cartesian3|Quaternion);
		findTimeInterval(time:Number,startIndex:Number);
		wrapTime(time:Number);
	}
	class StencilFunction{
		constructor();
		ALWAYS:  Number;
		EQUAL:  Number;
		GREATER:  Number;
		GREATER_OR_EQUAL:  Number;
		LESS:  Number;
		LESS_OR_EQUAL:  Number;
		NEVER:  Number;
		NOT_EQUAL:  Number;

	}
	class StencilOperation{
		constructor();
		DECREMENT:  Number;
		DECREMENT_WRAP:  Number;
		INCREMENT:  Number;
		INCREMENT_WRAP:  Number;
		INVERT:  Number;
		KEEP:  Number;
		REPLACE:  Number;
		ZERO:  Number;

	}
	class StripeMaterialProperty{
		constructor(options:Object);
		definitionChanged:  Event;
		evenColor:  Property;
		isConstant:  Boolean;
		oddColor:  Property;
		offset:  Property;
		orientation:  Property;
		repeat:  Property;
		equals(other:Property);
		getType(time:JulianDate);
		getValue(time:JulianDate,result:Object);
	}
	class StripeOrientation{
		constructor();
		HORIZONTAL:  Number;
		VERTICAL:  Number;

	}
	class StyleExpression{
		constructor();

		evaluate(frameState:FrameState,feature:Cesium3DTileFeature,result:Object);
		evaluateColor(frameState:FrameState,feature:Cesium3DTileFeature,result:Color);
	}
	class subdivideArray{
		constructor(array/*:Array*/,numberOfArrays:Number);
	}
	class Sun{
		constructor();
		glowFactor:  Number;
		show:  Boolean;
		destroy();
		isDestroyed();
	}
	class SvgPathBindingHandler{
		constructor();


	}
	class TaskProcessor{
		constructor(workerName:String,maximumActiveTasks:Number);

		destroy();
		isDestroyed();
		scheduleTask(parameters:any,transferableObjects:Array<Object>);
	}
	class TerrainData{
		constructor();
		credits:  Array<Credit>;
		waterMask:  Uint8Array|Image|Canvas;
		interpolateHeight(rectangle:Rectangle,longitude:Number,latitude:Number);
		isChildAvailable(thisX:Number,thisY:Number,childX:Number,childY:Number);
		upsample(tilingScheme:TilingScheme,thisX:Number,thisY:Number,thisLevel:Number,descendantX:Number,descendantY:Number,descendantLevel:Number);
		wasCreatedByUpsampling();
	}
	class TerrainProvider{
		constructor();
		heightmapTerrainQuality:  Number;
		availability:  TileAvailability;
		credit:  Credit;
		errorEvent:  Event;
		hasVertexNormals:  Boolean;
		hasWaterMask:  Boolean;
		ready:  Boolean;
		readyPromise:  Promise<Boolean>;
		tilingScheme:  TilingScheme;
		getEstimatedLevelZeroGeometricErrorForAHeightmap(ellipsoid:Ellipsoid,tileImageWidth:Number,numberOfTilesAtLevelZero:Number);
		getRegularGridIndices(width:Number,height:Number);
		getLevelMaximumGeometricError(level:Number);
		getTileDataAvailable(x:Number,y:Number,level:Number);
		requestTileGeometry(x:Number,y:Number,level:Number,request:Request);
	}
	class TextureMagnificationFilter{
		constructor();
		LINEAR:  Number;
		NEAREST:  Number;

	}
	class TextureMinificationFilter{
		constructor();
		LINEAR:  Number;
		LINEAR_MIPMAP_LINEAR:  Number;
		LINEAR_MIPMAP_NEAREST:  Number;
		NEAREST:  Number;
		NEAREST_MIPMAP_LINEAR:  Number;
		NEAREST_MIPMAP_NEAREST:  Number;

	}
	class TileAvailability{
		constructor(tilingScheme:TilingScheme,maximumLevel:Number);

		addAvailableTileRange(level:Number,startX:Number,startY:Number,endX:Number,endY:Number);
		computeBestAvailableLevelOverRectangle(rectangle:Rectangle);
		computeChildMaskForTile(level:Number,x:Number,y:Number);
		computeMaximumLevelAtPosition(position:Cartographic);
		isTileAvailable(level:Number,x:Number,y:Number);
	}
	class TileCoordinatesImageryProvider{
		constructor(options:Object);
		credit:  Credit;
		errorEvent:  Event;
		hasAlphaChannel:  Boolean;
		maximumLevel:  Number;
		minimumLevel:  Number;
		proxy:  Proxy;
		ready:  Boolean;
		readyPromise:  Promise<Boolean>;
		rectangle:  Rectangle;
		tileDiscardPolicy:  TileDiscardPolicy;
		tileHeight:  Number;
		tileWidth:  Number;
		tilingScheme:  TilingScheme;
		getTileCredits(x:Number,y:Number,level:Number);
		pickFeatures(x:Number,y:Number,level:Number,longitude:Number,latitude:Number);
		requestImage(x:Number,y:Number,level:Number,request:Request);
	}
	class TileDiscardPolicy{
		constructor();

		isReady();
		shouldDiscardImage(image:Image);
	}
	class ImageryProviderTerrainProvider{}
	class TileProviderError_RetryFunction{}
	class TileProviderError{
		constructor(provider:ImageryProvider|TerrainProvider,message:String,x:Number,y:Number,level:Number,timesRetried:Number,error:Error);
		error:  Error;
		level:  Number;
		message:  String;
		provider:  ImageryProvider|TerrainProvider;
		retry:  Boolean;
		timesRetried:  Number;
		x:  Number;
		y:  Number;
		handleError(previousError:TileProviderError,provider:ImageryProviderTerrainProvider,event:Event,message:String,x:Number,y:Number,level:Number,retryFunction:TileProviderError_RetryFunction,errorDetails:Error);
		handleSuccess(previousError:TileProviderError);
	}
	class TilingScheme{
		constructor();
		ellipsoid:  Ellipsoid;
		projection:  MapProjection;
		rectangle:  Rectangle;
		getNumberOfXTilesAtLevel(level:Number);
		getNumberOfYTilesAtLevel(level:Number);
		positionToTileXY(position:Cartographic,level:Number,result:Cartesian2);
		rectangleToNativeRectangle(rectangle:Rectangle,result:Rectangle);
		tileXYToNativeRectangle(x:Number,y:Number,level:Number,result:Object);
		tileXYToRectangle(x:Number,y:Number,level:Number,result:Object);
	}
	class TimeDynamicImagery{
		constructor(options:Object);
		clock:  Clock;
		currentInterval:  TimeInterval;
		times:  TimeIntervalCollection;
		checkApproachingInterval(x:Number,y:Number,level:Number,request:Request);
		getFromCache(x:Number,y:Number,level:Number,request:Request);
	}
	class TimeInterval{
		constructor(options:Object);
		EMPTY:  TimeInterval;
		data:  Object;
		isEmpty:  Boolean;
		isStartIncluded:  Boolean;
		isStopIncluded:  Boolean;
		start:  JulianDate;
		stop:  JulianDate;
		clone(timeInterval:TimeInterval,result:TimeInterval);
		contains(timeInterval:TimeInterval,julianDate:JulianDate);
		equals(left:TimeInterval,right:TimeInterval,dataComparer:TimeInterval_DataComparer);
		equalsEpsilon(left:TimeInterval,right:TimeInterval,epsilon:Number,dataComparer:TimeInterval_DataComparer);
		fromIso8601(options:Object,iso8601:String,isStartIncluded:Boolean,isStopIncluded:Boolean,data:Object,result:TimeInterval);
		intersect(left:TimeInterval,right:TimeInterval,result:TimeInterval,mergeCallback:TimeInterval_MergeCallback);
		toIso8601(timeInterval:TimeInterval,precision:Number);
		clone(result:TimeInterval);
		equals(right:TimeInterval,dataComparer:TimeInterval_DataComparer);
		equalsEpsilon(right:TimeInterval,epsilon:Number,dataComparer:TimeInterval_DataComparer);
		toString();
	}
	class TimeInterval_DataComparer{}
	class TimeInterval_MergeCallback{}
	class TimeIntervalCollection{
		constructor(intervals:Array<TimeInterval>);
		changedEvent:  Event;
		isEmpty:  Boolean;
		isStartIncluded:  Boolean;
		isStopIncluded:  Boolean;
		length:  Number;
		start:  JulianDate;
		stop:  JulianDate;
		fromIso8601(options:Object,iso8601:String,isStartIncluded:Boolean,isStopIncluded:Boolean,leadingInterval:Boolean,trailingInterval:Boolean,dataCallback/*:function*/,result:TimeIntervalCollection);
		fromIso8601DateArray(options:Object,iso8601Dates:Array<String>,isStartIncluded:Boolean,isStopIncluded:Boolean,leadingInterval:Boolean,trailingInterval:Boolean,dataCallback/*:function*/,result:TimeIntervalCollection);
		fromIso8601DurationArray(options:Object,epoch:JulianDate,iso8601Durations:String,relativeToPrevious:Boolean,isStartIncluded:Boolean,isStopIncluded:Boolean,leadingInterval:Boolean,trailingInterval:Boolean,dataCallback/*:function*/,result:TimeIntervalCollection);
		fromJulianDateArray(options:Object,julianDates:Array<JulianDate>,isStartIncluded:Boolean,isStopIncluded:Boolean,leadingInterval:Boolean,trailingInterval:Boolean,dataCallback/*:function*/,result:TimeIntervalCollection);
		addInterval(interval:TimeInterval,dataComparer:TimeInterval_DataComparer);
		contains(julianDate:JulianDate);
		equals(right:TimeIntervalCollection,dataComparer:TimeInterval_DataComparer);
		findDataForIntervalContainingDate(date:JulianDate);
		findInterval(options:Object,start:JulianDate,stop:JulianDate,isStartIncluded:Boolean,isStopIncluded:Boolean);
		findIntervalContainingDate(date:JulianDate);
		get(index:Number);
		indexOf(date:JulianDate);
		intersect(other:TimeIntervalCollection,dataComparer:TimeInterval_DataComparer,mergeCallback:TimeInterval_MergeCallback);
		removeAll();
		removeInterval(interval:TimeInterval);
	}
	class TimeIntervalCollectionPositionProperty{
		constructor(referenceFrame:ReferenceFrame);
		definitionChanged:  Event;
		intervals:  TimeIntervalCollection;
		isConstant:  Boolean;
		referenceFrame:  ReferenceFrame;
		equals(other:Property);
		getValue(time:JulianDate,result:Object);
		getValueInReferenceFrame(time:JulianDate,referenceFrame:ReferenceFrame,result:Cartesian3);
	}
	class TimeIntervalCollectionProperty{
		constructor();
		definitionChanged:  Event;
		intervals:  TimeIntervalCollection;
		isConstant:  Boolean;
		equals(other:Property);
		getValue(time:JulianDate,result:Object);
	}
	class Timeline{
		constructor(container:Element,clock:Clock);
		container:  Element;
		destroy();
		isDestroyed();
		resize();
		zoomTo(startTime:JulianDate,stopTime:JulianDate);
	}
	class TimeStandard{
		constructor();
		TAI:  Number;
		UTC:  Number;

	}
	class ToggleButtonViewModel{
		constructor(command:Command,options:Object);
		command:  Command;
		toggled:  Boolean;
		tooltip:  String;

	}
	class Transforms_LocalFrameToFixedFrame{}
	class Transforms{
		constructor();

		computeFixedToIcrfMatrix(date:JulianDate,result:Matrix3);
		computeIcrfToFixedMatrix(date:JulianDate,result:Matrix3);
		computeTemeToPseudoFixedMatrix(date:JulianDate,result:Matrix3);
		eastNorthUpToFixedFrame(origin:Cartesian3,ellipsoid:Ellipsoid,result:Matrix4);
		headingPitchRollQuaternion(origin:Cartesian3,headingPitchRoll:HeadingPitchRoll,ellipsoid:Ellipsoid,fixedFrameTransform:Transforms_LocalFrameToFixedFrame,result:Quaternion);
		headingPitchRollToFixedFrame(origin:Cartesian3,headingPitchRoll:HeadingPitchRoll,ellipsoid:Ellipsoid,fixedFrameTransform:Transforms_LocalFrameToFixedFrame,result:Matrix4);
		localFrameToFixedFrameGenerator(firstAxis:String,secondAxis:String);
		northEastDownToFixedFrame(origin:Cartesian3,ellipsoid:Ellipsoid,result:Matrix4);
		northUpEastToFixedFrame(origin:Cartesian3,ellipsoid:Ellipsoid,result:Matrix4);
		northWestUpToFixedFrame(origin:Cartesian3,ellipsoid:Ellipsoid,result:Matrix4);
		pointToWindowCoordinates(modelViewProjectionMatrix:Matrix4,viewportTransformation:Matrix4,point:Cartesian3,result:Cartesian2);
		preloadIcrfFixed(timeInterval:TimeInterval);
	}
	class TranslationRotationScale{
		constructor(translation:Cartesian3,rotation:Quaternion,scale:Cartesian3);
		rotation:  Quaternion;
		scale:  Cartesian3;
		translation:  Cartesian3;
		equals(right:TranslationRotationScale);
	}
	class TridiagonalSystemSolver{
		constructor();

		solve(diagonal:Array<Number>,lower:Array<Number>,upper:Array<Number>,right:Array<Cartesian3>);
	}
	class TrustedServers{
		constructor();

		add(host:String,port:Number);
		clear();
		contains(url:String);
		remove(host:String,port:Number);
	}
	class UrlTemplateImageryProvider{
		constructor(options:Promise<Object>|Object);
		credit:  Credit;
		enablePickFeatures:  Boolean;
		errorEvent:  Event;
		hasAlphaChannel:  Boolean;
		maximumLevel:  Number;
		minimumLevel:  Number;
		pickFeaturesUrl:  String;
		proxy:  Proxy;
		ready:  Boolean;
		readyPromise:  Promise<Boolean>;
		rectangle:  Rectangle;
		tileDiscardPolicy:  TileDiscardPolicy;
		tileHeight:  Number;
		tileWidth:  Number;
		tilingScheme:  TilingScheme;
		url:  String;
		urlSchemeZeroPadding:  Object;
		getTileCredits(x:Number,y:Number,level:Number);
		pickFeatures(x:Number,y:Number,level:Number,longitude:Number,latitude:Number);
		reinitialize(options:Promise<Object>|Object);
		requestImage(x:Number,y:Number,level:Number,request:Request);
	}
	class VelocityOrientationProperty{
		constructor(position:Property,ellipsoid:Ellipsoid);
		definitionChanged:  Event;
		ellipsoid:  Property;
		isConstant:  Boolean;
		position:  Property;
		equals(other:Property);
		getValue(time:JulianDate,result:Quaternion);
	}
	class VelocityVectorProperty{
		constructor(position:Property,normalize:Boolean);
		definitionChanged:  Event;
		isConstant:  Boolean;
		normalize:  Boolean;
		position:  Property;
		equals(other:Property);
		getValue(time:JulianDate,result:Cartesian3);
	}
	class VertexFormat{
		constructor(options:Object);
		ALL:  VertexFormat;
		DEFAULT:  VertexFormat;
		packedLength:  Number;
		POSITION_AND_COLOR:  VertexFormat;
		POSITION_AND_NORMAL:  VertexFormat;
		POSITION_AND_ST:  VertexFormat;
		POSITION_NORMAL_AND_ST:  VertexFormat;
		clone(vertexFormat:VertexFormat,result:VertexFormat);
		pack(value:VertexFormat,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:VertexFormat);
	}
	class VerticalOrigin{
		constructor();
		BASELINE:  Number;
		BOTTOM:  Number;
		CENTER:  Number;
		TOP:  Number;

	}
	class VideoSynchronizer{
		constructor(options:Object);
		clock:  Clock;
		element:  HTMLVideoElement;
		epoch:  JulianDate;
		tolerance:  Number;
		destroy();
		isDestroyed();
	}
	class Viewer{
		constructor(container:Element|String,options:Object);
		allowDataSourcesToSuspendAnimation:  Boolean;
		animation:  Animation;
		baseLayerPicker:  BaseLayerPicker;
		bottomContainer:  Element;
		camera:  Camera;
		canvas:  Canvas;
		cesiumLogo:  Element;
		cesiumWidget:  CesiumWidget;
		clock:  Clock;
		clockTrackedDataSource:  DataSource;
		clockViewModel:  ClockViewModel;
		container:  Element;
		dataSourceDisplay:  DataSourceDisplay;
		dataSources:  DataSourceCollection;
		entities:  EntityCollection;
		fullscreenButton:  FullscreenButton;
		geocoder:  Geocoder;
		homeButton:  HomeButton;
		imageryLayers:  ImageryLayerCollection;
		infoBox:  InfoBox;
		navigationHelpButton:  NavigationHelpButton;
		projectionPicker:  ProjectionPicker;
		resolutionScale:  Number;
		scene:  Scene;
		sceneModePicker:  SceneModePicker;
		screenSpaceEventHandler:  ScreenSpaceEventHandler;
		selectedEntity:  Entity;
		selectedEntityChanged:  Event;
		selectionIndicator:  SelectionIndicator;
		shadowMap:  ShadowMap;
		shadows:  Boolean;
		targetFrameRate:  Number;
		terrainProvider:  TerrainProvider;
		terrainShadows:  ShadowMode;
		timeline:  Timeline;
		trackedEntity:  Entity;
		trackedEntityChanged:  Event;
		useDefaultRenderLoop:  Boolean;
		vrButton:  VRButton;
		destroy();
		extend(mixin:Viewer_ViewerMixin,options:Object);
		flyTo(target:Entity | Array<Entity> | EntityCollection | DataSource | ImageryLayer | Cesium3DTileset | Promise<(Entity|Array<Entity>|EntityCollection|DataSource|ImageryLayer|Cesium3DTileset)>,options:Object,duration:Number,maximumHeight:Number,offset:HeadingPitchRange);
		forceResize();
		isDestroyed();
		render();
		resize();
		zoomTo(target:Entity | Array<Entity> | EntityCollection | DataSource | ImageryLayer | Cesium3DTileset | Promise<(Entity|Array<Entity>|EntityCollection|DataSource|ImageryLayer|Cesium3DTileset)>,offset:HeadingPitchRange);
	}
	class Viewer_ViewerMixin{}
	class viewerCesium3DTilesInspectorMixin{
		constructor(viewer:Viewer);


	}
	class viewerCesiumInspectorMixin{
		constructor(viewer:Viewer);


	}
	class viewerDragDropMixin{
		constructor(viewer:Viewer,options:Object);
		clampToGround:  Boolean;
		clearOnDrop:  Boolean;
		dropEnabled:  Element;
		dropError:  Event;
		dropTarget:  Element;
		flyToOnDrop:  Boolean;
		proxy:  DefaultProxy;

	}
	class viewerPerformanceWatchdogMixin{
		constructor(viewer:Viewer,options:Object);


	}
	class ViewportQuad{
		constructor(rectangle:BoundingRectangle,material:Material);
		material:  Material;
		rectangle:  BoundingRectangle;
		show:  Boolean;
		destroy();
		isDestroyed();
		update();
	}
	class Visibility{
		constructor();
		FULL:  Number;
		NONE:  Number;
		PARTIAL:  Number;

	}
	class Visualizer{
		constructor();

		destroy();
		isDestroyed();
		update(time:JulianDate);
	}
	class VRButton{
		constructor(container:Element|String,scene:Scene,vrElement:Element|String);
		container:  Element;
		viewModel:  VRButtonViewModel;
		destroy();
		isDestroyed();
	}
	class VRButtonViewModel{
		constructor(scene:Scene,vrElement:Element|String);
		command:  Command;
		isVREnabled:  Boolean;
		isVRMode:  Boolean;
		tooltip:  String;
		vrElement:  Element;
		destroy();
		isDestroyed();
	}
	class VRTheWorldTerrainProvider{
		constructor(options:Object);
		credit:  Credit;
		errorEvent:  Event;
		hasVertexNormals:  Boolean;
		hasWaterMask:  Boolean;
		ready:  Boolean;
		readyPromise:  Promise<Boolean>;
		tilingScheme:  GeographicTilingScheme;
		getLevelMaximumGeometricError(level:Number);
		getTileDataAvailable(x:Number,y:Number,level:Number);
		requestTileGeometry(x:Number,y:Number,level:Number,request:Request);
	}
	class WallGeometry{
		constructor(options:Object);
		packedLength:  Number;
		createGeometry(wallGeometry:WallGeometry);
		fromConstantHeights(options:Object,positions:Array<Cartesian3>,maximumHeight:Number,minimumHeight:Number,ellipsoid:Ellipsoid,vertexFormat:VertexFormat);
		pack(value:WallGeometry,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:WallGeometry);
	}
	class WallGeometryUpdater{
		constructor(entity:Entity,scene:Scene);

		createFillGeometryInstance(time:JulianDate);
		createOutlineGeometryInstance(time:JulianDate);
	}
	class WallGraphics{
		constructor(options:Object);
		definitionChanged:  Event;
		distanceDisplayCondition:  Property;
		fill:  Property;
		granularity:  Property;
		material:  MaterialProperty;
		maximumHeights:  Property;
		minimumHeights:  Property;
		outline:  Property;
		outlineColor:  Property;
		outlineWidth:  Property;
		positions:  Property;
		shadows:  Property;
		show:  Property;
		clone(result:WallGraphics);
		merge(source:WallGraphics);
	}
	class WallOutlineGeometry{
		constructor(options:Object);
		packedLength:  Number;
		createGeometry(wallGeometry:WallOutlineGeometry);
		fromConstantHeights(options:Object,positions:Array<Cartesian3>,maximumHeight:Number,minimumHeight:Number,ellipsoid:Ellipsoid);
		pack(value:WallOutlineGeometry,array:Array<Number>,startingIndex:Number);
		unpack(array:Array<Number>,startingIndex:Number,result:WallOutlineGeometry);
	}
	class WebGLConstants{
		constructor();


	}
	class WebMapServiceImageryProvider{
		constructor(options:Object);
		DefaultParameters;
		GetFeatureInfoDefaultParameters;
		credit:  Credit;
		enablePickFeatures:  Boolean;
		errorEvent:  Event;
		hasAlphaChannel:  Boolean;
		layers:  String;
		maximumLevel:  Number;
		minimumLevel:  Number;
		proxy:  Proxy;
		ready:  Boolean;
		readyPromise:  Promise<Boolean>;
		rectangle:  Rectangle;
		tileDiscardPolicy:  TileDiscardPolicy;
		tileHeight:  Number;
		tileWidth:  Number;
		tilingScheme:  TilingScheme;
		url:  String;
		getTileCredits(x:Number,y:Number,level:Number);
		pickFeatures(x:Number,y:Number,level:Number,longitude:Number,latitude:Number);
		requestImage(x:Number,y:Number,level:Number,request:Request);
	}
	class WebMapTileServiceImageryProvider{
		constructor(options:Object);
		clock:  Clock;
		credit:  Credit;
		dimensions:  Object;
		errorEvent:  Event;
		format:  String;
		hasAlphaChannel:  Boolean;
		maximumLevel:  Number;
		minimumLevel:  Number;
		proxy:  Proxy;
		ready:  Boolean;
		readyPromise:  Promise<Boolean>;
		rectangle:  Rectangle;
		tileDiscardPolicy:  TileDiscardPolicy;
		tileHeight:  Number;
		tileWidth:  Number;
		tilingScheme:  TilingScheme;
		times:  TimeIntervalCollection;
		url:  String;
		getTileCredits(x:Number,y:Number,level:Number);
		pickFeatures(x:Number,y:Number,level:Number,longitude:Number,latitude:Number);
		requestImage(x:Number,y:Number,level:Number,request:Request);
	}
	class WebMercatorProjection{
		constructor(ellipsoid:Ellipsoid);
		MaximumLatitude:  Number;
		ellipsoid:  Ellipsoid;
		geodeticLatitudeToMercatorAngle(latitude:Number);
		mercatorAngleToGeodeticLatitude(mercatorAngle:Number);
		project(cartographic:Cartographic,result:Cartesian3);
		unproject(cartesian:Cartesian3,result:Cartographic);
	}
	class WebMercatorTilingScheme{
		constructor(options:Object);
		ellipsoid:  Ellipsoid;
		projection:  MapProjection;
		rectangle:  Rectangle;
		getNumberOfXTilesAtLevel(level:Number);
		getNumberOfYTilesAtLevel(level:Number);
		positionToTileXY(position:Cartographic,level:Number,result:Cartesian2);
		rectangleToNativeRectangle(rectangle:Rectangle,result:Rectangle);
		tileXYToNativeRectangle(x:Number,y:Number,level:Number,result:Object);
		tileXYToRectangle(x:Number,y:Number,level:Number,result:Object);
	}
	class WeightSpline{
		constructor(options:Object);
		times:  Array<Number>;
		weights:  Array<Number>;
		clampTime(time:Number);
		evaluate(time:Number,result:Array<Number>);
		findTimeInterval(time:Number);
		wrapTime(time:Number);
	}
	class WindingOrder{
		constructor();
		CLOCKWISE:  Number;
		COUNTER_CLOCKWISE:  Number;

	}
}